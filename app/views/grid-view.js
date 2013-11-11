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
        "click .grid-element":"setColor"
    },
    initialize: function(options){
        this.size = options.size;
        this.perRow = Math.sqrt(this.size);
        this.el.style.width = ((this.perRow * 15)-2) + "px";

    },
    setColor: function(evt){
        evt.currentTarget.style.backgroundColor = "#f00"

    },
    render: function(){
        this.$el.empty();
        var frag = document.createDocumentFragment();

        var size = this.size;
        
        
        while(--size){
            var el = makeElement();
            frag.appendChild(el);
        }

        this.$el.append(frag);
    }
});

module.exports = GridView;