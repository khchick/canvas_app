class DrawingEllipse extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        // this.w = canvasReal.width;
        // this.w = canvasReal.height;
        // this.contextDraft.translate(0.5, 0.5);
    }

    onMouseDown(coord,event){
        // var rect = canvasReal.getBoundingClientRect();
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,event){
        // var w = canvasReal.width;
        // var h = canvasReal.height; 
        // var rect = canvasReal.getBoundingClientRect();
        this.newX = coord[0];
        this.newY = coord[1];

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); 
        this.drawEllipse(this.origX,this.origY,this.newX,this.newY);
        this.contextDraft.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    }

    onMouseMove(){}
    onMouseUp(){
        // var w = canvasReal.width;
        // var h = canvasReal.height; 
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
        this.contextDraft.strokeStyle = '#000';
        this.contextDraft.stroke();
    }
    
}