var config = {

    // COLOR MANAGEMENT
    strokeCol: $('#strokeCol').val(),
    changeStrokeCol: function(jscolor) {
        config.strokeCol = `#${jscolor}`;
    },
    fillCol: $('#fillCol').val(),
    changeFillCol: function(jscolor) {
        config.fillCol = `#${jscolor}`;
    },
    bgCol:  $('#bgCol').val(),
    changeBgCol: function(jscolor) {
        config.bgCol = `#${jscolor}`;
        $('#background').css("background-color",config.bgCol);
        // config.history.snapshot[config.history.action] = new Image();
        // config.history.snapshot[config.history.action].src = canvasReal.toDataURL();
        // config.history.action++;
    },

    // UNDO / REDO
    history: {
        action: 0,
        snapshot: [],
        currentIndex: 0,
        undo: function(){
            if (config.history.action > 1) {
                config.history.action--;
                config.history.currentIndex = config.history.action;
                contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
                contextReal.drawImage(config.history.snapshot[config.history.action-1],0,0);
            }
        },
        redo: function(){
            if (config.history.action == config.history.currentIndex && config.history.action < config.history.snapshot.length) {
                config.history.action++;
                config.history.currentIndex++;
                contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
                contextReal.drawImage(config.history.snapshot[config.history.action-1],0,0);
            } else if (config.history.action != config.history.currentIndex) {
                config.history.snapshot.splice(config.history.action);
                config.history.currentIndex = config.history.action;
            }
        },
        // clear: function(){
        //     contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
        //     action = 0;
        //     config.history.snapshot = [];
        //     currentIndex = 0;
            
        // }
    }
}