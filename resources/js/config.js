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
        contextBG.fillStyle = `#${jscolor}`;
        contextBG.fillRect(0,0,canvasBG.width,canvasBG.height);
    },

    // DEFAULT BRUSH SIZE
    brushSize: 5,

    // TEXT MANAGEMENT
    textFont: "Jua",
    textSize: 20,
    changeText: function(){config.textFont=$('#textFont').val();$('#textFont').css('font-family',$('#textFont').val());$('.showTextSize').css('font-family',$('#textFont').val());},


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
    }
}
