// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  EPMENG_URL: 'http://192.168.1.5:8092/format',
  
  //SERVER_URL:'https://starapps.duckdns.org:9090',
  SERVER_URL:'https://localhost:9090',
  //SERVER_URL:'https://62.171.129.171:9090',
  
  
  SERVER_DEPLOY:'http://localhost:8080',
  EPMENG_URL_PROD: 'http://gmashro.com:8092/format',
  SERVER_URL_PROD:'http://gmashro.com:9090',
  
  KEYCLOAK: {
    KEYCLOAK_checkLoginIframe : false,
    KEYCLOAK_INIT_URL:'http://localhost:8081',
    KEYCLOAK_INIT_URL_:'https://localhost:8443',
    KEYCLOAK_INIT_REALM:'appgen',
    KEYCLOAK_INIT_CLIENT_ID:'prj1-client',
    KEYCLOAK_USER_GROUP: 'SYSADM'
  }


  };


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
