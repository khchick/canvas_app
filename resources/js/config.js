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
    textFont: $('#textFont').val(),
    textSize: $('#textSize').val(),
    brushSize: 5,
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
        // clear: function(){
        //     contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
        //     action = 0;
        //     config.history.snapshot = [];
        //     currentIndex = 0;
            
        // }
    }
}

//Change text size
// $("#textSize")[0].oninput = function() {
//     config.textSize = this.value;
//     //Change visual
//     $('.showTextSize').css("font-size",this.value+"px");
//     $(".showTextSize").html(this.value);
// }

//Change brush size
// $("#brushSize")[0].oninput = function() {
//     canvasSettings.brushSize = this.value;
//     //Change visual
//     $('.sizeImage').css("width",this.value);
//     $('.sizeImage').css("height",this.value);
// }

// //Shows textbox options if text tool is active
// if(/textButton/.test($('.active')[0].className)){
//     $('#textOptions').slideDown().css("display","flex");
// }
// else {
//     $('#textOptions').slideUp();//.css("display","none");
// }
// $(window).resize(function(){
//     $('#textOptions').css("display","none");
// })
// //Clear text
// config.clearText = function(){
//     $('#textInput').css({"display":"none","transform":"translateY(0) translateX(0)"});
//     $('#textInput').val('');
// }