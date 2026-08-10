
const proxyConfig = [
  {
    context: "/valify",
    pathRewrite: { "^/valify": "" },
    target: "https://www.valifystage.com",
    changeOrigin: true,
    secure: false,
  },
];

function setupForCorporateProxy(proxyConfig) {
  const proxyServer = process.env.https_proxy || process.env.HTTPS_PROXY;

  if (proxyServer) {
    const agent = new HttpsProxyAgent(proxyServer);
    proxyConfig.forEach((c) => {
      c.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);

