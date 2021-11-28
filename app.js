const express = require("express");
const localTunnel = require("localTunnel");

const PORT = 3000;
const app = express();

app.listen(PORT);

app.get("/", (_, res) => {
  res.send("<h1>This is testing localTunnel</h1>");
});

async () => {
  const tunnel = await localTunnel({ port: PORT });

  tunnel.on("close", () => {
    console.log("tunnel closed");
  });
};
