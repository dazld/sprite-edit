var Backbone = require('backbone');
var bus = require('../lib/bus');

var makeElement = function(){
    var elem = document.createElement('span');
    elem.className = 'grid-element';
    return elem;
}

var GridView = Backbone.View.extend({
    className: 'grid',
    tagName: 'div',
    events: {
        "mousedown .grid-element":"setActive",
        "mouseup .grid-element":"setActive",
        "mousemove .grid-element":"setColor"
    },
    initialize: function(options){
        this.clicked = false;
        this.size = options.size;
        this.el.style.width = (this.size * 14) + "px";

    },
    setActive: function(evt){
        var active = evt.type === 'mousedown' ? true : false;
        this.clicked = active;
    },
    setColor: function(evt){
        if (!this.clicked) {
            return;
        };
        var target = evt.currentTarget;
        var bg = evt.currentTarget.style.backgroundColor;
        
        if (bg.length > 0) {
            target.removeAttribute('style');
        } else {
            target.style.backgroundColor = "#f00";
        }

    },
    render: function(){
        this.$el.empty();
        var frag = document.createDocumentFragment();

        var size = this.size*this.size;
        
        
        while(size--){
            var el = makeElement();
            frag.appendChild(el);
        }

        this.$el.append(frag);
    }
});

module.exports = GridView;