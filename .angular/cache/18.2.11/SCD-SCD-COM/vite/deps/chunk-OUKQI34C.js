// node_modules/@progress/kendo-date-math/dist/es/clone-date.js
var cloneDate = function(date) {
  return date ? new Date(date.getTime()) : null;
};

// node_modules/@progress/kendo-date-math/dist/es/adjust-dst.js
var adjustDST = function(date, hour) {
  var newDate = cloneDate(date);
  if (hour === 0 && newDate.getHours() === 23) {
    newDate.setHours(newDate.getHours() + 2);
  }
  return newDate;
};

// node_modules/@progress/kendo-date-math/dist/es/add-days.js
var addDays = function(date, offset2) {
  var newDate = cloneDate(date);
  newDate.setDate(newDate.getDate() + offset2);
  return adjustDST(newDate, date.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/create-date.js
var createDate = function(year, month, day, hours, minutes, seconds, milliseconds) {
  if (hours === void 0) {
    hours = 0;
  }
  if (minutes === void 0) {
    minutes = 0;
  }
  if (seconds === void 0) {
    seconds = 0;
  }
  if (milliseconds === void 0) {
    milliseconds = 0;
  }
  var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
  if (year > -1 && year < 100) {
    date.setFullYear(date.getFullYear() - 1900);
  }
  return adjustDST(date, hours);
};

// node_modules/@progress/kendo-date-math/dist/es/last-day-of-month.js
var lastDayOfMonth = function(date) {
  var newDate = createDate(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  return addDays(newDate, -1);
};

// node_modules/@progress/kendo-date-math/dist/es/add-months.js
var MONTHS_LENGTH = 12;
var normalize = function(date, expectedMonth) {
  return date.getMonth() !== expectedMonth ? lastDayOfMonth(addMonths(date, -1)) : date;
};
var addMonths = function(date, offset2) {
  var newDate = cloneDate(date);
  var diff = (newDate.getMonth() + offset2) % MONTHS_LENGTH;
  var expectedMonth = (MONTHS_LENGTH + diff) % MONTHS_LENGTH;
  newDate.setMonth(newDate.getMonth() + offset2);
  return normalize(adjustDST(newDate, date.getHours()), expectedMonth);
};

// node_modules/@progress/kendo-date-math/dist/es/set-year.js
var setYear = function(value, year) {
  var month = value.getMonth();
  var candidate = createDate(year, month, value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
  return candidate.getMonth() === month ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};

// node_modules/@progress/kendo-date-math/dist/es/add-years.js
var addYears = function(value, offset2) {
  return adjustDST(setYear(value, value.getFullYear() + offset2), value.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/add-centuries.js
var addCenturies = function(value, offset2) {
  return addYears(value, 100 * offset2);
};

// node_modules/@progress/kendo-date-math/dist/es/add-decades.js
var addDecades = function(value, offset2) {
  return addYears(value, 10 * offset2);
};

// node_modules/@progress/kendo-date-math/dist/es/add-weeks.js
var addWeeks = function(date, offset2) {
  return addDays(date, offset2 * 7);
};

// node_modules/@progress/kendo-date-math/dist/es/constants.js
var MS_PER_MINUTE = 6e4;
var MS_PER_HOUR = 36e5;
var MS_PER_DAY = 864e5;

// node_modules/@progress/kendo-date-math/dist/es/direction.enum.js
var Direction;
(function(Direction2) {
  Direction2[Direction2["Forward"] = 1] = "Forward";
  Direction2[Direction2["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

// node_modules/@progress/kendo-date-math/dist/es/day-of-week.js
var dayOfWeek = function(date, weekDay, direction) {
  if (direction === void 0) {
    direction = Direction.Forward;
  }
  var newDate = cloneDate(date);
  var newDay = (weekDay - newDate.getDay() + 7 * direction) % 7;
  newDate.setDate(newDate.getDate() + newDay);
  return adjustDST(newDate, date.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/day.enum.js
var Day;
(function(Day2) {
  Day2[Day2["Sunday"] = 0] = "Sunday";
  Day2[Day2["Monday"] = 1] = "Monday";
  Day2[Day2["Tuesday"] = 2] = "Tuesday";
  Day2[Day2["Wednesday"] = 3] = "Wednesday";
  Day2[Day2["Thursday"] = 4] = "Thursday";
  Day2[Day2["Friday"] = 5] = "Friday";
  Day2[Day2["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));

// node_modules/@progress/kendo-date-math/dist/es/normalize-year.js
var normalizeYear = function(value, year) {
  return setYear(value, year(value.getFullYear()));
};

// node_modules/@progress/kendo-date-math/dist/es/first-decade-of-century.js
var firstDecadeOfCentury = function(value) {
  return normalizeYear(value, function(y) {
    return y - y % 100;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-centuries.js
var durationInCenturies = function(start, end) {
  return (firstDecadeOfCentury(end).getFullYear() - firstDecadeOfCentury(start).getFullYear()) / 100;
};

// node_modules/@progress/kendo-date-math/dist/es/first-year-of-decade.js
var firstYearOfDecade = function(value) {
  return normalizeYear(value, function(y) {
    return y - y % 10;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-decades.js
var durationInDecades = function(start, end) {
  return (firstYearOfDecade(end).getFullYear() - firstYearOfDecade(start).getFullYear()) / 10;
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-months.js
var durationInMonths = function(start, end) {
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-years.js
var durationInYears = function(start, end) {
  return end.getFullYear() - start.getFullYear();
};

// node_modules/@progress/kendo-date-math/dist/es/first-day-in-week.js
var firstDayInWeek = function(date, weekStartDay) {
  if (weekStartDay === void 0) {
    weekStartDay = Day.Sunday;
  }
  var first = cloneDate(date);
  while (first.getDay() !== weekStartDay) {
    first.setDate(first.getDate() - 1);
  }
  return first;
};

// node_modules/@progress/kendo-date-math/dist/es/first-day-of-month.js
var firstDayOfMonth = function(date) {
  return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

// node_modules/@progress/kendo-date-math/dist/es/set-month.js
var setMonth = function(value, month) {
  var day = value.getDate();
  var candidate = createDate(value.getFullYear(), month, day, value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
  return candidate.getDate() === day ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};

// node_modules/@progress/kendo-date-math/dist/es/first-month-of-year.js
var firstMonthOfYear = function(value) {
  return setMonth(value, 0);
};

// node_modules/@progress/kendo-date-math/dist/es/get-date.js
var getDate = function(date) {
  return createDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
};

// node_modules/@progress/kendo-date-math/dist/es/is-equal.js
var isEqual = function(candidate, expected) {
  if (!candidate && !expected) {
    return true;
  }
  return candidate && expected && candidate.getTime() === expected.getTime();
};

// node_modules/@progress/kendo-date-math/dist/es/is-equal-date.js
var isEqualDate = function(candidate, expected) {
  if (!candidate && !expected) {
    return true;
  }
  return candidate && expected && isEqual(getDate(candidate), getDate(expected));
};

// node_modules/@progress/kendo-date-math/dist/es/last-decade-of-century.js
var lastDecadeOfCentury = function(value) {
  return normalizeYear(value, function(y) {
    return y - y % 100 + 90;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/last-month-of-year.js
var lastMonthOfYear = function(value) {
  return setMonth(value, 11);
};

// node_modules/@progress/kendo-date-math/dist/es/last-year-of-decade.js
var lastYearOfDecade = function(value) {
  return normalizeYear(value, function(y) {
    return y - y % 10 + 9;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/next-day-of-week.js
var nextDayOfWeek = function(date, weekDay) {
  return dayOfWeek(date, weekDay, Direction.Forward);
};

// node_modules/@progress/kendo-date-math/dist/es/prev-day-of-week.js
var prevDayOfWeek = function(date, weekDay) {
  return dayOfWeek(date, weekDay, Direction.Backward);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/timezones.js
var timezones = {
  rules: {},
  titles: {},
  zones: {}
};

// node_modules/@progress/kendo-date-math/dist/es/tz/rule-to-date.js
var MONTHS = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
};
var DAYS = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
};
var MS_PER_MINUTE2 = 6e4;
var ruleToDate = function(year, rule, zoneOffset) {
  var month = rule[3];
  var on = rule[4];
  var time = rule[5];
  var date;
  var ruleOffset = time[3] === "u" ? -zoneOffset * MS_PER_MINUTE2 : 0;
  if (!isNaN(on)) {
    date = new Date(Date.UTC(year, MONTHS[month], on, time[0], time[1], time[2]) + ruleOffset);
  } else if (on.indexOf("last") === 0) {
    date = new Date(Date.UTC(year, MONTHS[month] + 1, 1, time[0] - 24, time[1], time[2]) + ruleOffset);
    var targetDay = DAYS[on.substr(4, 3)];
    var ourDay = date.getUTCDay();
    date.setUTCDate(date.getUTCDate() + targetDay - ourDay - (targetDay > ourDay ? 7 : 0));
  } else if (on.indexOf(">=") >= 0) {
    date = new Date(Date.UTC(year, MONTHS[month], on.substr(5), time[0], time[1], time[2], 0) + ruleOffset);
    var targetDay = DAYS[on.substr(0, 3)];
    var ourDay = date.getUTCDay();
    date.setUTCDate(date.getUTCDate() + targetDay - ourDay + (targetDay < ourDay ? 7 : 0));
  }
  return date;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/find-rule.js
var CURRENT_UTC_TIME = (/* @__PURE__ */ new Date()).getTime();
var findRule = function(zoneRule, utcTime, zoneOffset) {
  if (utcTime === void 0) {
    utcTime = CURRENT_UTC_TIME;
  }
  if (zoneOffset === void 0) {
    zoneOffset = 0;
  }
  var rules = timezones.rules[zoneRule];
  if (!rules) {
    var time = zoneRule.split(":");
    var offset2 = 0;
    if (time.length > 1) {
      offset2 = time[0] * 60 + Number(time[1]);
    }
    return [-1e6, "max", "-", "Jan", 1, [0, 0, 0], offset2, "-"];
  }
  var year = new Date(utcTime).getUTCFullYear();
  rules = rules.filter(function(currentRule) {
    var from = currentRule[0];
    var to = currentRule[1];
    return from <= year && (to >= year || from === year && to === "only" || to === "max");
  });
  rules.push(utcTime);
  rules.sort(function(a, b) {
    if (typeof a !== "number") {
      a = Number(ruleToDate(year, a, zoneOffset));
    }
    if (typeof b !== "number") {
      b = Number(ruleToDate(year, b, zoneOffset));
    }
    return a - b;
  });
  var rule = rules[rules.indexOf(utcTime) - 1] || rules[rules.length - 1];
  return isNaN(rule) ? rule : null;
};

// node_modules/@progress/kendo-date-math/dist/es/errors.js
var NO_TZ_INFO = "The required {0} timezone information is not provided!";
var INVALID_TZ_STRUCTURE = "The provided timezone information has invalid stucture!";
var formatRegExp = /\{(\d+)}?\}/g;
var flatten = function(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};
var formatMessage = function(message) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var flattenValues = flatten(values);
  return message.replace(formatRegExp, function(_, index) {
    return flattenValues[parseInt(index, 10)];
  });
};

// node_modules/@progress/kendo-date-math/dist/es/tz/get-zone.js
var getZoneRules = function(timezone) {
  var zones = timezones.zones;
  if (!zones) {
    throw new Error(formatMessage(NO_TZ_INFO, timezone));
  }
  var zoneRules = zones[timezone];
  var result = typeof zoneRules === "string" ? zones[zoneRules] : zoneRules;
  if (!result) {
    throw new Error(formatMessage(NO_TZ_INFO, timezone));
  }
  return result;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/find-zone.js
var findZone = function(timezone, utcTime) {
  if (utcTime === void 0) {
    utcTime = (/* @__PURE__ */ new Date()).getTime();
  }
  if (timezone === "Etc/UTC" || timezone === "Etc/GMT") {
    return [0, "-", "UTC", null];
  }
  var zoneRules = getZoneRules(timezone);
  var idx = zoneRules.length - 1;
  for (; idx >= 0; idx--) {
    var until = zoneRules[idx][3];
    if (until && utcTime > until) {
      break;
    }
  }
  var zone = zoneRules[idx + 1];
  if (!zone) {
    throw new Error(formatMessage(NO_TZ_INFO, timezone));
  }
  return zone;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/zone-and-rule.js
var zoneAndRule = function(timezone, date) {
  var utcTime = date.getTime();
  var zone = findZone(timezone, utcTime);
  return {
    rule: findRule(zone[1], utcTime, zone[0]),
    zone
  };
};

// node_modules/@progress/kendo-date-math/dist/es/tz/pad-number.js
var padNumber = function(num, len) {
  if (len === void 0) {
    len = 2;
  }
  var sign = num < 0 ? "-" : "";
  return sign + new Array(len).concat([Math.abs(num)]).join("0").slice(-len);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/abbr-timezone.js
var abbrTimezone = function(timezone, date) {
  if (date === void 0) {
    date = /* @__PURE__ */ new Date();
  }
  if (timezone === "Etc/UTC") {
    return "UTC";
  }
  if (timezone === "Etc/GMT") {
    return "GMT";
  }
  if (timezone === "") {
    return "";
  }
  var _a = zoneAndRule(timezone, date), zone = _a.zone, rule = _a.rule;
  var base = zone[2];
  if (base.indexOf("/") >= 0) {
    return base.split("/")[rule && +rule[6] ? 1 : 0];
  } else if (base.indexOf("%s") >= 0) {
    return base.replace("%s", !rule || rule[7] === "-" ? "" : rule[7]);
  } else if (base.indexOf("%z") >= 0) {
    var hours = -1 * Math.trunc(zone[0] / 60);
    var hoursPart = padNumber(hours, 2);
    var signPart = hours > 0 ? "+" : "";
    var minutes = Math.abs(Math.trunc(zone[0] % 60));
    var minutesPart = minutes === 0 ? "" : padNumber(minutes, 2);
    return base.replace("%z", "" + signPart + hoursPart + minutesPart);
  }
  return base;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/load-timezone.js
var loadTimezone = function(tzInfo) {
  if (!tzInfo) {
    throw new Error(formatMessage(NO_TZ_INFO, ""));
  }
  var rules = tzInfo.rules, titles = tzInfo.titles, zones = tzInfo.zones;
  if (rules === void 0 || zones === void 0) {
    throw new Error(INVALID_TZ_STRUCTURE);
  }
  Object.assign(timezones.rules, rules);
  Object.assign(timezones.titles, titles || {});
  Object.assign(timezones.zones, zones);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/offset.js
var offset = function(timezone, date) {
  if (date === void 0) {
    date = /* @__PURE__ */ new Date();
  }
  if (timezone === "Etc/UTC" || timezone === "Etc/GMT") {
    return 0;
  }
  if (timezone === "") {
    return date.getTimezoneOffset();
  }
  var _a = zoneAndRule(timezone, date), rule = _a.rule, zone = _a.zone;
  return parseFloat(rule ? zone[0] - rule[6] : zone[0]);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/timezone-group-names.js
var timezoneGroupNames = function() {
  var groups = Object.keys(timezones.titles).reduce(function(tmp, t) {
    var group = timezones.titles[t].group;
    tmp[group] = group;
    return tmp;
  }, {});
  return Object.keys(groups);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/timezone-names.js
var timezoneNames = function() {
  return Object.keys(timezones.zones);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/timezone-title.js
var timezoneTitle = function(timezone) {
  var titles = timezones.titles;
  var info = titles[timezone] || {};
  return info.long || timezone;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/to-local-date.js
function toLocalDate(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}

// node_modules/@progress/kendo-date-math/dist/es/tz/zoned-date.js
var addMinutes = function(date, minutes) {
  return new Date(date.getTime() + minutes * MS_PER_MINUTE);
};
var addHours = function(date, hours) {
  return new Date(date.getTime() + hours * MS_PER_HOUR);
};
var dayAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var datePrefix = function(utcDate) {
  return dayAbbr[utcDate.getUTCDay()] + " " + monthAbbr[utcDate.getUTCMonth()];
};
function isZoneMissingHour(date, timezone) {
  var currentOffset = offset(timezone, date);
  var prevHour = addHours(date, -1);
  var prevOffset = offset(timezone, prevHour);
  return currentOffset < prevOffset;
}
function shiftZoneMissingHour(utcDate, timezone) {
  var dstOffset = isZoneMissingHour(utcDate, timezone) ? 1 : 0;
  return addHours(utcDate, dstOffset);
}
function convertTimezoneUTC(utcLocal, fromTimezone, toTimezone) {
  if (fromTimezone === toTimezone) {
    return utcLocal;
  }
  var fromOffset = offset(fromTimezone, utcLocal);
  var toOffset = offset(toTimezone, utcLocal);
  var baseDiff = fromOffset - toOffset;
  var midDate = addMinutes(utcLocal, baseDiff);
  var midOffset = offset(toTimezone, midDate);
  var dstDiff = toOffset - midOffset;
  return addMinutes(utcLocal, baseDiff + dstDiff);
}
function formatOffset(tzOffset) {
  var sign = tzOffset <= 0 ? "+" : "-";
  var value = Math.abs(tzOffset);
  var hours = padNumber(Math.floor(value / 60));
  var minutes = padNumber(value % 60);
  return "GMT" + sign + hours + minutes;
}
var ZonedDate = (
  /** @class */
  function() {
    function ZonedDate2(utcDate, timezone) {
      this._utcDate = cloneDate(utcDate);
      this.timezone = timezone;
      var tzOffset = offset(timezone, utcDate);
      this.timezoneOffset = tzOffset;
      var localDate = shiftZoneMissingHour(utcDate, timezone);
      this._localDate = convertTimezoneUTC(localDate, timezone, "Etc/UTC");
    }
    Object.defineProperty(ZonedDate2.prototype, "cachedLocalDate", {
      /**
       * Returns a cached local date that denotes the exact time in the set timezone.
       *
       * @return Date - A local date that denotes the exact time in the set timezone.
       *
       * This property is an alternative to `toLocalDate()` that returns a cached value instead of cloning it.
       *
       * > Modifying the returned instance will corrupt the `ZonedDate` state.
       */
      get: function() {
        return this._localDate;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ZonedDate2.prototype, "cachedUTCDate", {
      /**
       * Returns a cached `Date` instance with UTC date parts that are set to the local time in the set timezone.
       *
       * @returns Date - A `Date` with UTC date parts that are set to the local time in the set timezone.
       *
       * This property is an alternative to `toUTCDate()` that returns a cached value instead of cloning it.
       *
       * > Modifying the returned instance will corrupt the `ZonedDate` state.
       */
      get: function() {
        return this._utcDate;
      },
      enumerable: true,
      configurable: true
    });
    ZonedDate2.fromLocalDate = function(date, timezone) {
      if (timezone === void 0) {
        timezone = "";
      }
      var utcDate = convertTimezoneUTC(date, "Etc/UTC", timezone);
      var shiftZone = isZoneMissingHour(utcDate, timezone);
      var zoneOffset = offset(timezone, utcDate);
      var fixedOffset = 0;
      if (shiftZone) {
        fixedOffset = zoneOffset > 0 ? -1 : 1;
      }
      var adjDate = addHours(utcDate, fixedOffset);
      return ZonedDate2.fromUTCDate(adjDate, timezone);
    };
    ZonedDate2.fromUTCDate = function(utcDate, timezone) {
      if (timezone === void 0) {
        timezone = "";
      }
      return new ZonedDate2(utcDate, timezone);
    };
    ZonedDate2.prototype.toLocalDate = function() {
      return cloneDate(this._localDate);
    };
    ZonedDate2.prototype.toUTCDate = function() {
      return cloneDate(this._utcDate);
    };
    ZonedDate2.prototype.toTimezone = function(toTimezone) {
      if (this.timezone === toTimezone) {
        return this.clone();
      }
      var tzOffset = offset(this.timezone, this._utcDate);
      var date = addMinutes(this._utcDate, tzOffset);
      return ZonedDate2.fromLocalDate(date, toTimezone);
    };
    ZonedDate2.prototype.clone = function() {
      return ZonedDate2.fromUTCDate(this._utcDate, this.timezone);
    };
    ZonedDate2.prototype.addDays = function(days) {
      var newDate = new Date(this._utcDate.getTime());
      newDate.setUTCDate(newDate.getUTCDate() + days);
      return ZonedDate2.fromUTCDate(newDate, this.timezone);
    };
    ZonedDate2.prototype.addTime = function(milliseconds) {
      var utcDate = new Date(this._utcDate.getTime());
      var utcMid = shiftZoneMissingHour(utcDate, this.timezone);
      utcMid.setTime(utcMid.getTime() + milliseconds);
      var utcResult = shiftZoneMissingHour(utcMid, this.timezone);
      return ZonedDate2.fromUTCDate(utcResult, this.timezone);
    };
    ZonedDate2.prototype.stripTime = function() {
      var date = this._utcDate;
      var ticks = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
      return ZonedDate2.fromUTCDate(new Date(ticks), this.timezone);
    };
    ZonedDate2.prototype.getTime = function() {
      return this._localDate.getTime();
    };
    ZonedDate2.prototype.getTimezoneOffset = function() {
      return this.timezoneOffset;
    };
    ZonedDate2.prototype.getFullYear = function() {
      return this._utcDate.getUTCFullYear();
    };
    ZonedDate2.prototype.getMonth = function() {
      return this._utcDate.getUTCMonth();
    };
    ZonedDate2.prototype.getDate = function() {
      return this._utcDate.getUTCDate();
    };
    ZonedDate2.prototype.getDay = function() {
      return this._utcDate.getUTCDay();
    };
    ZonedDate2.prototype.getHours = function() {
      return this._utcDate.getUTCHours();
    };
    ZonedDate2.prototype.getMinutes = function() {
      return this._utcDate.getUTCMinutes();
    };
    ZonedDate2.prototype.getSeconds = function() {
      return this._utcDate.getUTCSeconds();
    };
    ZonedDate2.prototype.getMilliseconds = function() {
      return this._utcDate.getUTCMilliseconds();
    };
    ZonedDate2.prototype.getUTCDate = function() {
      return this._localDate.getUTCDate();
    };
    ZonedDate2.prototype.getUTCDay = function() {
      return this._localDate.getUTCDay();
    };
    ZonedDate2.prototype.getUTCFullYear = function() {
      return this._localDate.getUTCFullYear();
    };
    ZonedDate2.prototype.getUTCHours = function() {
      return this._localDate.getUTCHours();
    };
    ZonedDate2.prototype.getUTCMilliseconds = function() {
      return this._localDate.getUTCMilliseconds();
    };
    ZonedDate2.prototype.getUTCMinutes = function() {
      return this._localDate.getUTCMinutes();
    };
    ZonedDate2.prototype.getUTCMonth = function() {
      return this._localDate.getUTCMonth();
    };
    ZonedDate2.prototype.getUTCSeconds = function() {
      return this._localDate.getUTCSeconds();
    };
    ZonedDate2.prototype.setTime = function(time) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setMilliseconds = function(ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCMilliseconds = function(ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setSeconds = function(sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCSeconds = function(sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setMinutes = function(min, sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCMinutes = function(min, sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setHours = function(hours, min, sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCHours = function(hours, min, sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setDate = function(date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCDate = function(date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setMonth = function(month, date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCMonth = function(month, date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setFullYear = function(year, month, date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCFullYear = function(year, month, date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.toISOString = function() {
      return this._localDate.toISOString();
    };
    ZonedDate2.prototype.toJSON = function() {
      return this._localDate.toJSON();
    };
    ZonedDate2.prototype.toString = function() {
      var dateString = datePrefix(this._utcDate);
      var timeString = this.toTimeString();
      return dateString + " " + this.getDate() + " " + this.getFullYear() + " " + timeString;
    };
    ZonedDate2.prototype.toDateString = function() {
      return toLocalDate(this._utcDate).toDateString();
    };
    ZonedDate2.prototype.toTimeString = function() {
      var hours = padNumber(this.getHours());
      var minutes = padNumber(this.getMinutes());
      var seconds = padNumber(this.getSeconds());
      var time = hours + ":" + minutes + ":" + seconds;
      var tzOffset = formatOffset(this.timezoneOffset);
      var abbrev = abbrTimezone(this.timezone, this._utcDate);
      if (abbrev) {
        abbrev = " (" + abbrev + ")";
      }
      return time + " " + tzOffset + abbrev;
    };
    ZonedDate2.prototype.toLocaleString = function(locales, options) {
      return this._localDate.toLocaleString(locales, options);
    };
    ZonedDate2.prototype.toLocaleDateString = function(locales, options) {
      return this._localDate.toLocaleDateString(locales, options);
    };
    ZonedDate2.prototype.toLocaleTimeString = function(locales, options) {
      return this._localDate.toLocaleTimeString(locales, options);
    };
    ZonedDate2.prototype.toUTCString = function() {
      return this.toTimezone("Etc/UTC").toString();
    };
    ZonedDate2.prototype[Symbol.toPrimitive] = function(hint) {
      if (hint === "string" || hint === "default") {
        return this.toString();
      }
      return this._localDate.getTime();
    };
    ZonedDate2.prototype.valueOf = function() {
      return this.getTime();
    };
    ZonedDate2.prototype.getVarDate = function() {
      throw new Error("Not implemented.");
    };
    ZonedDate2.prototype.format = function(_) {
      throw new Error("Not implemented.");
    };
    ZonedDate2.prototype.formatUTC = function(_) {
      throw new Error("Not implemented.");
    };
    return ZonedDate2;
  }()
);

// node_modules/@progress/kendo-date-math/dist/es/tz/zones-per-group.js
var zonesPerGroup = function(group) {
  var titles = timezones.titles;
  return Object.keys(titles).reduce(function(result, title) {
    var info = titles[title] || {};
    return info.group === group ? result.concat(title.split(" ")) : result;
  }, []);
};

// node_modules/@progress/kendo-date-math/dist/es/week-in-year.js
var moveDateToWeekStart = function(date, weekStartDay) {
  if (weekStartDay !== Day.Monday) {
    return addDays(prevDayOfWeek(date, weekStartDay), 4);
  }
  return addDays(date, 4 - (date.getDay() || 7));
};
var calcWeekInYear = function(date, weekStartDay) {
  var firstWeekInYear = createDate(date.getFullYear(), 0, 1, -6);
  var newDate = moveDateToWeekStart(date, weekStartDay);
  var diffInMS = newDate.getTime() - firstWeekInYear.getTime();
  var days = Math.floor(diffInMS / MS_PER_DAY);
  return 1 + Math.floor(days / 7);
};
var weekInYear = function(date, weekStartDay) {
  if (weekStartDay === void 0) {
    weekStartDay = Day.Monday;
  }
  date = getDate(date);
  var prevWeekDate = addDays(date, -7);
  var nextWeekDate = addDays(date, 7);
  var weekNumber = calcWeekInYear(date, weekStartDay);
  if (weekNumber === 0) {
    return calcWeekInYear(prevWeekDate, weekStartDay) + 1;
  }
  if (weekNumber === 53 && calcWeekInYear(nextWeekDate, weekStartDay) > 1) {
    return 1;
  }
  return weekNumber;
};

export {
  cloneDate,
  adjustDST,
  addDays,
  createDate,
  lastDayOfMonth,
  addMonths,
  addYears,
  addCenturies,
  addDecades,
  addWeeks,
  MS_PER_MINUTE,
  MS_PER_HOUR,
  MS_PER_DAY,
  Direction,
  dayOfWeek,
  Day,
  firstDecadeOfCentury,
  durationInCenturies,
  firstYearOfDecade,
  durationInDecades,
  durationInMonths,
  durationInYears,
  firstDayInWeek,
  firstDayOfMonth,
  firstMonthOfYear,
  getDate,
  isEqual,
  isEqualDate,
  lastDecadeOfCentury,
  lastMonthOfYear,
  lastYearOfDecade,
  nextDayOfWeek,
  prevDayOfWeek,
  abbrTimezone,
  loadTimezone,
  offset,
  timezoneGroupNames,
  timezoneNames,
  timezoneTitle,
  toLocalDate,
  ZonedDate,
  zonesPerGroup,
  weekInYear
};
//# sourceMappingURL=chunk-OUKQI34C.js.map
