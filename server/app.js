const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const consola = require("consola");
const Tag = require("../utils/tag")();

io.on("connection", socket => {
  socket.on("createTag", (tagName, cb) => {
    if (tagName) {
      let color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      socket.emit('newTag', new Tag(1, tagName, color));
    }
    cb();
  });
});

module.exports = {
  app,
  server
};
