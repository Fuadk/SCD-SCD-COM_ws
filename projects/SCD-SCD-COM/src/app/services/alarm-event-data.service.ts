import { Injectable } from '@angular/core';
import { Alarm } from './scada.service';
import { ScadaIntegrationService } from './scada-integration.service';
import { AlarmEventDataSource } from './expression-engine.service';

/**
 * Adapter that exposes the live alarm list from ScadaIntegrationService
 * through the AlarmEventDataSource contract that ExpressionEngineService
 * consumes.
 *
 * Severity values are compared case-insensitively. Adjust the sets below
 * to match whatever strings your OPC UA server actually emits.
 */
const HIGH_SEVERITIES = new Set(['HIGH', 'CRITICAL', 'MAJOR']);
const NORMAL_SEVERITIES = new Set(['NORMAL', 'LOW', 'MINOR', 'INFO']);

@Injectable({ providedIn: 'root' })
export class AlarmEventDataService implements AlarmEventDataSource {

  constructor(private scada: ScadaIntegrationService) {}

  // ── Public snapshot used by the engine ────────────────────────────────

  activeEventCount(scope?: string): number {
    return this.collect(scope, a => a.active === true).length;
  }

  disabledCount(scope?: string): number {
    // "Disabled" doesn't map cleanly to OPC UA alarms.
    // The closest equivalent is shelved-and-inactive. Adjust if your
    // backend exposes an explicit disabled flag.
    return this.collect(scope, a => a.active !== true && a.retain === false).length;
  }

  highPriorityActive(): number {
    return this.collect(undefined, a => a.active === true && this.isHigh(a)).length;
  }

  highSeverityAcked(): number {
    return this.collect(undefined, a => this.isHigh(a) && a.acknowledged).length;
  }

  highSeverityUnacked(): number {
    return this.collect(undefined, a => this.isHigh(a) && !a.acknowledged).length;
  }

  inAlmAckedCount(): number {
    return this.collect(undefined, a => a.active === true && a.acknowledged).length;
  }

  almsShelvedCount(): number {
    // Treat "retained but not active" as shelved.
    return this.collect(undefined, a => a.retain === true && a.active !== true).length;
  }

  inAlmSuppressCount(): number {
    // No "suppressed" field on Alarm. Return 0 until the backend exposes one.
    return 0;
  }

  inAlmUnackedCount(): number {
    return this.collect(undefined, a => a.active === true && !a.acknowledged).length;
  }

  normalShelvedCount(): number {
    return this.collect(undefined, a => this.isNormal(a) && a.retain === true && a.active !== true).length;
  }

  normalSuppressedCount(): number {
    return 0;
  }

  normalUnackedCount(): number {
    return this.collect(undefined, a => this.isNormal(a) && a.active === true && !a.acknowledged).length;
  }

  shelvedAlarmsExist(): number {
    return this.collect(undefined, a => a.retain === true && a.active !== true).length > 0 ? 1 : 0;
  }

  unackedAlarmsExist(): number {
    return this.collect(undefined, a => !a.acknowledged).length > 0 ? 1 : 0;
  }

  faultedAlarmsExit(): number {
    // Meaning: alarms that were active and have since returned to normal.
    // Without a history buffer, count "not active but acknowledged" as
    // exited-and-cleared. Tune to your semantics.
    return this.collect(undefined, a => a.active !== true && a.acknowledged).length;
  }

  // ── Internals ─────────────────────────────────────────────────────────

  /**
   * Read the current alarm snapshot, optionally filtered by server name,
   * then filter again by a predicate.
   *
   * `scope` matches against `alarm.server_name`. Omit it to count across
   * all servers.
   */
  private collect(scope: string | undefined, pred: (a: Alarm) => boolean): Alarm[] {
    const alarms = this.scada.getCurrentAlarms() ?? [];
    const inScope = scope ? alarms.filter(a => a.server_name === scope) : alarms;
    return inScope.filter(pred);
  }

  private isHigh(a: Alarm): boolean {
    return HIGH_SEVERITIES.has(String(a.severity ?? '').toUpperCase());
  }

  private isNormal(a: Alarm): boolean {
    return NORMAL_SEVERITIES.has(String(a.severity ?? '').toUpperCase());
  }
}