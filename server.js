// filepath: /c:/Users/terry/Downloads/json-server/server.js
const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3002;
server.use(cors()); // Add this line to enable CORS
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server v2 is running on port ${port}`);
});
