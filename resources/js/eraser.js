class Eraser extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
    onMouseDown(coord,event){
        // this.context.strokeStyle = "#000";
        this.context.lineJoin = "round";
        this.context.lineWidth = config.brushSize;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.context.globalCompositeOperation = "destination-out"
        this.draw(coord[0],coord[1]);
        this.context.globalCompositeOperation = "source-over";
    }

    onMouseMove(){}
    onMouseUp(){
        this.onFinish();
    }
    onMouseLeave(){}
    onMouseEnter(){}

    onFinish(){
        config.history.snapshot[config.history.action] = new Image();
        config.history.snapshot[config.history.action].src = canvasReal.toDataURL();
        config.history.action++;
    }

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
}