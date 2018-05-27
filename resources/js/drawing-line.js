class DrawingLine extends PaintFunction{
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
        this.newX = coord[0];
        this.newY = coord[1];
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.draw(this.origX,this.origY,this.newX,this.newY);
    }

    onMouseMove(){}
    onMouseUp(){
        this.contextReal.drawImage(canvasDraft, 0, 0);
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x1,y1,x2,y2){
        this.contextDraft.strokeStyle = "#df4b26";
        this.contextDraft.lineWidth = 5;
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(x1,y1);
        this.contextDraft.lineTo(x2,y2);
        this.contextDraft.stroke();    
    }
}