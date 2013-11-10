var $ = require('jquery-browserify');
var Backbone = require('backbone');
var postal = require('postal');
var logger = require('./logger');

Backbone.$ = $;

function Core(options){
    this.debug = logger(options.debug);
    this.debug('Core startup');
    this.initialize(options);
};


Core.prototype.initialize = function(options){
    this.views = {};
    this.root = options.root || document.getElementById('main');
    
    this.debug('Core initialized with', options);

};

Core.prototype.start = function(){
    this.debug('Core started');
};


module.exports = Core;