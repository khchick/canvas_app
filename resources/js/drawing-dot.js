class DrawingDot extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.numInstances = (this.numInstances || 0) + 1;
    }

    onMouseDown(coord,event){
        this.origX = coord[0] - 7.5;
        this.origY = coord[1] - 7.5;
        this.newX = this.origX + 10
        this.newY = this.origY + 10
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); 
        this.drawEllipse(this.origX,this.origY,this.newX,this.newY);
        this.contextDraft.fill();
        var i = this.numInstances;
        this.contextDraft.fillText(i,this.newX + 5,this.newY + 5);
        this.numInstances++;
    }

    onDragging(coord,event){}
    onMouseMove(){}
    onMouseUp(){
        this.contextReal.drawImage(canvasDraft, 0, 0);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
    onMouseLeave(){}
    onMouseEnter(){}

    drawEllipse(x1, y1, x2, y2) {
        var radiusX = (x2 - x1) * 0.5,
            radiusY = (y2 - y1) * 0.5,
            centerX = x1 + radiusX,
            centerY = y1 + radiusY,
            step = 0.01,
            a = step,
            pi2 = Math.PI * 2 - step;
        
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(centerX + radiusX * Math.cos(0), centerY + radiusY * Math.sin(0));
    
        for(; a < pi2; a += step) {
            this.contextDraft.lineTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));
        }
        
        this.contextDraft.closePath();
        this.contextDraft.fillStyle = 'black';
        this.contextDraft.fill();
    }
    
}