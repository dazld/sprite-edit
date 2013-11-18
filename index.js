// views 
var GridView = require('./app/views/grid-view');

var Core = require('./app/lib/core')

var options = {
    debug: true,
    views: {
        grid: new GridView({size:16})
    }
};

var app = new Core(options);

app.start();


// exports for debug
if (options.debug) {
    window.app = app;
};