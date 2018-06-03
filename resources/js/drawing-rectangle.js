class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.rect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextDraft.fillStyle = config.fillCol;
        this.contextDraft.strokeStyle = config.strokeCol;
        this.contextDraft.lineWidth = config.brushSize;
        this.contextDraft.stroke();
        this.contextDraft.fill();

    }

    onMouseMove(){}
    onMouseUp(coord, event){
        this.contextReal.drawImage(canvasDraft, 0, 0);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.onFinish();
    }
    onMouseLeave(){}
    onMouseEnter(){}

    onFinish(){
        config.history.snapshot[config.history.action] = new Image();
        config.history.snapshot[config.history.action].src = canvasReal.toDataURL();
        config.history.action++;
    }
}
