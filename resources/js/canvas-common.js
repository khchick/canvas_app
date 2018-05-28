let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;

$('#canvas-draft').mousedown(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
    // cPush();
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseUp([mouseX,mouseY],e);
        // cPush();
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}    

// var history = {
//     redo_list: [],
//     undo_list: [],
//     saveState: function(canvasReal, list, keep_redo) {
//       keep_redo = keep_redo || false;
//       if(!keep_redo) {
//         this.redo_list = [];
//       }
      
//       (list || this.undo_list).push(canvasReal.toDataURL());   
//     },
//     undo: function(canvasReal, contextReal) {
//       this.restoreState(canvasReal, contextReal, this.undo_list, this.redo_list);
//     },
//     redo: function(canvasReal, contextReal) {
//       this.restoreState(canvasReal, contextReal, this.redo_list, this.undo_list);
//     },
//     restoreState: function(canvasReal, contextReal,  pop, push) {
//       if(pop.length) {
//         this.saveState(canvasReal, push, true);
//         var restore_state = pop.pop();
//         var img = new Element('img', {'src':restore_state});
//         img.onload = function() {
//             contextReal.clearRect(0, 0, 800, 500);
//             contextReal.drawImage(img, 0, 0, 800, 500, 0, 0, 600, 400);  
//         }
//       }
//     }
//   }