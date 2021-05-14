  
const execute = (bot, msg, args) => {
    return msg.reply("Olá! :)");
  };
  
  module.exports = {
    name: "hello",
    help: "Hello, world!",
    execute,
  };