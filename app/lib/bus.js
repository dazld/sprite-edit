var postal = new (require('postal'));

var bus = postal.channel('App');

module.exports = bus;