class DrawingEllipse extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord){
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord){
        this.newX = coord[0];
        this.newY = coord[1];
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); 
        this.drawEllipse(this.origX,this.origY,this.newX,this.newY);
    }

    onMouseMove(){}
    onMouseUp(){
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
        this.contextDraft.lineWidth = config.brushSize;
        this.contextDraft.strokeStyle = config.strokeCol;
        this.contextDraft.fillStyle = config.fillCol;
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }
    
}