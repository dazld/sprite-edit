var $ = require('jquery-browserify');
var Backbone = require('backbone');
var bus = require('./bus');
var logger = require('./logger');

Backbone.$ = $;

function Core(options){
    this.started = false;
    this.debug = logger(options.debug);


    this.debug('Core startup');
    this.initialize(options);
    
};


Core.prototype.initialize = function(options){
    
    this.bus = bus;
    this.views = options.views || {};
    this.modelCache = {};
    this.collectionCache = {};
    if (options.debug) {
        // general wiretap
        this.bus.subscribe('*',this.debug);
        this.bus.publish('debugging',true);
    };
    
    
    this.root = options.root || document.getElementById('main');
    this.debug('Core initialized with', options);
    return this;
};

Core.prototype.start = function(){
    if (this.started) {
        this.debug('start called again, errorrrrrr');
        return this;
    } 

    this.started = true;
    this.debug('Core started');
    this.root.appendChild(this.views.grid.el);
    this.views.grid.render();
    return this;    

    
};


module.exports = Core;