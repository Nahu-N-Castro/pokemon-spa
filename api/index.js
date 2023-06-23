const { conn } = require("./src/db");
const server = require("./src/app");

const port = 3001;

server.listen(port, () => {
  conn.sync({ force: true });
  console.log(`Listening on Port: ${port}`);
});
