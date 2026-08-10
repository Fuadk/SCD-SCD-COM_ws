export const environment = {
  production: true,
  EPMENG_URL: 'http://213.136.79.186:8092/format',
  SERVER_URL:'https://localhost:9090',
  //SERVER_URL:'https://localhost:9091',
  SERVER_DEPLOY:'http://localhost:8080',

 KEYCLOAK: {
    KEYCLOAK_checkLoginIframe : false,
    KEYCLOAK_INIT_URL_:'http://localhost:8081',
    KEYCLOAK_INIT_URL:'https://localhost:8444',
    KEYCLOAK_INIT_REALM:'appgen',
    KEYCLOAK_INIT_CLIENT_ID:'prj1-client',
    KEYCLOAK_USER_GROUP: 'SYSADM'
  }
  
  };
