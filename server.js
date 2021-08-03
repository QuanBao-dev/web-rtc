const express = require("express");
const sslRedirect = require("heroku-ssl-redirect").default;
const { ExpressPeerServer } = require("peer");
const app = express();
const port = process.env.PORT || 8080;
const server = require("http").createServer(app);
const peerServer = ExpressPeerServer(server, { path: "/" });

app.use(sslRedirect());
app.use("/", peerServer);

server.listen(port, () => {
  console.log("server listen on port", port);
});
