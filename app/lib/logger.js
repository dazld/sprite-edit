

var noop = function(){};

// timed log function if debug is set
var logger = function logger (debug){
    var result;
    var startTime = Date.now();

    if (debug) {
        result = function(){
            var logTime = ((Date.now() - startTime) / 1000).toFixed(3)+"s - ";
            var partialConsole = console.log.bind(console, logTime);
            partialConsole.apply(null, arguments);
        };
    } else {
        result = noop;
    }

    return result;
}

module.exports = logger;