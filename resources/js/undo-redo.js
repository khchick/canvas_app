// var ctx = document.getElementById('canvas-real').getContext("2d");
// var CanvasLogBook = function() {
//     this.index = 0;
//     this.logs = [];
//     this.logDrawing();
// };
// CanvasLogBook.prototype.sliceAndPush = function(imageObject) {
//     var array;
//     if (this.index == this.logs.length-1) {
//         this.logs.push(imageObject);
//         array = this.logs;
//     } else {
//         var tempArray = this.logs.slice(0, this.index+1);
//         tempArray.push(imageObject);
//         array = tempArray;
//     }
//     if (array.length > 1) {
//         this.index++;
//     }
//     return array;
// };
// CanvasLogBook.prototype.logDrawing = function() { 

//         var image = new Image();
//         image.src = document.getElementById('canvas-real').toDataURL();
//         this.logs = this.sliceAndPush(image);

// };
// CanvasLogBook.prototype.undo = function() {
//     ctx.clearRect(0, 0, $('#canvas-real').width(), $('#canvas-real').height());
//     if (this.index > 0) {
//         this.index--;
//         this.showLogAtIndex(this.index);
//     }
// };
// CanvasLogBook.prototype.redo = function() {
//     if (this.index < this.logs.length-1) {
//         ctx.clearRect(0, 0, $('#canvas-real').width(), $('#canvas-real').height());
//         this.index++;
//         this.showLogAtIndex(this.index);
//     }
// };
// CanvasLogBook.prototype.showLogAtIndex = function(index) {
//     ctx.clearRect(0, 0, $('#canvas-real').width(), $('#canvas-real').height());

//         var image = new Image();
//         image.src = this.logs[index];
//         ctx.drawImage(image, 0, 0);
    
// };
// var canvasLogBook = new CanvasLogBook();
// (function($) {
//     var tool;
//     var canvas= $('canvas-real');
//     var ctx = canvas.getContext('2d');
    
//     var history = {
//       redo_list: [],
//       undo_list: [],
//       saveState: function(canvas, list, keep_redo) {
//         keep_redo = keep_redo || false;
//         if(!keep_redo) {
//           this.redo_list = [];
//         }
        
//         (list || this.undo_list).push(canvas.toDataURL());   
//       },
//       undo: function(canvas, ctx) {
//         this.restoreState(canvas, ctx, this.undo_list, this.redo_list);
//       },
//       redo: function(canvas, ctx) {
//         this.restoreState(canvas, ctx, this.redo_list, this.undo_list);
//       },
//       restoreState: function(canvas, ctx,  pop, push) {
//         if(pop.length) {
//           this.saveState(canvas, push, true);
//           var restore_state = pop.pop();
//           var img = new Element('img', {'src':restore_state});
//           img.onload = function() {
//             ctx.clearRect(0, 0, 600, 400);
//             ctx.drawImage(img, 0, 0, 600, 400, 0, 0, 600, 400);  
//           }
//         }
//       }
//     }
    
    // var pencil = {
    //   options: {
    //     stroke_color: ['00', '00', '00'],
    //     dim: 4
    //   },
    //   init: function(canvas, ctx) {
    //     this.canvas = canvas;
    //     this.canvas_coords = this.canvas.getCoordinates();
    //     this.ctx = ctx;
    //     this.ctx.strokeColor = this.options.stroke_color;
    //     this.drawing = false;
    //     this.addCanvasEvents();
    //   },
    //   addCanvasEvents: function() {
    //     this.canvas.addEvent('mousedown', this.start.bind(this));
    //     this.canvas.addEvent('mousemove', this.stroke.bind(this));
    //     this.canvas.addEvent('mouseup', this.stop.bind(this));
    //     this.canvas.addEvent('mouseout', this.stop.bind(this));
    //   },
    //   start: function(evt) {
    //     var x = evt.page.x - this.canvas_coords.left;
    //     var y = evt.page.y - this.canvas_coords.top;
    //     this.ctx.beginPath();
    //     this.ctx.moveTo(x, y);
        // history.saveState(this.canvas);
    //     this.drawing = true;
    //   },
    //   stroke: function(evt) {
    //     if(this.drawing) {
    //       var x = evt.page.x - this.canvas_coords.left;
    //       var y = evt.page.y - this.canvas_coords.top;
    //       this.ctx.lineTo(x, y);
    //       this.ctx.stroke();
          
    //     }
    //   },
    //   stop: function(evt) {
    //     if(this.drawing) this.drawing = false;
    //   }
    // };
    
    // $('pencil').addEvent('click', function() {
    //   pencil.init(canvas, ctx);
    // });
    
  //   $('undo').addEvent('click', function() {
  //     history.undo(canvas, ctx);
  //   });
    
  //   $('redo').addEvent('click', function() {
  //     history.redo(canvas, ctx);
  //   });
  
    
  // })(document.id)

// function drawImage() {
//     var image = new Image();
//     image.src = 'myimg.jpg';
//     $(image).load(function () {
//         ctx.drawImage(image, 0, 0, 500, 200);
//         cPush();
//     });    
// }

// var cPushArray = new Array();
// var cStep = -1;
// var ctx;
// ctx = document.getElementById('canvas-real').getContext("2d");
	
// function cPush() {
//     cStep++;
//     if (cStep < cPushArray.length) { cPushArray.length = cStep; }
//     cPushArray.push(document.getElementById('canvas-real').toDataURL());
// }

// function cUndo() {
//     if (cStep > 0) {
//         cStep--;
//         var canvasPic = new Image();
//         canvasPic.src = cPushArray[cStep];
//         canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
//     }
// }

// function cRedo() {
//     if (cStep < cPushArray.length-1) {
//         cStep++;
//         var canvasPic = new Image();
//         canvasPic.src = cPushArray[cStep];
//         canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
//     }
// }