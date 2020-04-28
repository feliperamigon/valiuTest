const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const consola = require("consola");
const Tag = require("../utils/tag")();

io.on("connection", socket => {

  // Socket for creating a new tag
  socket.on("createTag", (tagName, cb) => {
    if (tagName) {
      let color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      let id = Math.floor((1 + Math.random()) * 0x10000);
      let tag = new Tag(id, tagName, color);
      socket.emit('newTag', tag);
      cb(tag);
    } else {
      cb({errorMessage: 'Error, tag name can not be empty'});
    }
  });

  // Socket to listen to the current tags list
  // socket.on("createTag", (tagName, cb) => {
  //   if (tagName) {
  //     let color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  //     let tag = new Tag(1, tagName, color);
  //     socket.emit('newTag', tag);
  //     cb(tag);
  //   } else {
  //     cb({errorMessage: 'Error, tag name can not be empty'});
  //   }
  // });

});

module.exports = {
  app,
  server
};
