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
        this.contextDraft.fillStyle = "green";
        this.contextDraft.strokeStyle = 'green';
        this.contextDraft.lineWidth = 5;
        this.contextDraft.stroke();
        this.contextDraft.fill();

    }

    onMouseMove(){}
    onMouseUp(coord, event){
        this.contextReal.drawImage(canvasDraft, 0, 0);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
