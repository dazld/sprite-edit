var Core = require('./app/lib/core')

var options = {
    debug: true
};

var app = new Core(options);

app.start();