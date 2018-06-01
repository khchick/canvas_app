class DrawingEllipse extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        // this.w = canvasReal.width;
        // this.w = canvasReal.height;
        // this.contextDraft.translate(0.5, 0.5);
    }

    onMouseDown(coord){
        // var rect = canvasReal.getBoundingClientRect();
        this.contextDraft.lineWidth = 5;
        this.contextDraft.strokeStyle = config.strokeCol;
        this.contextDraft.fillStyle = config.fillCol;
        this.contextReal.lineWidth = 5;
        this.contextReal.strokeStyle = config.strokeCol;
        this.contextReal.fillStyle = config.fillCol;
        
        this.origX = coord[0];
        this.origY = coord[1];

        this.contextReal.beginPath();
    }

    onDragging(coord){
        // var w = canvasReal.width;
        // var h = canvasReal.height; 
        // var rect = canvasReal.getBoundingClientRect();
        this.newX = coord[0];
        this.newY = coord[1];

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); 
        this.contextDraft.beginPath();        
        this.contextDraft.ellipse(this.origX, this.origY, Math.abs(this.newX- this.origX), Math.abs(this.newY - this.origY), 0 * Math.PI/180, 0, 2 * Math.PI) // rotation hardcoded as zero - essentially drawing an arc from zero @ x-axis to 2pi;
        this.contextDraft.fill();
        this.contextDraft.stroke();
        // this.contextDraft.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    }

    onMouseMove(){}
    onMouseUp(){
        // var w = canvasReal.width;
        // var h = canvasReal.height; 
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        // this.contextReal.drawImage(canvasDraft, 0, 0);
        this.contextReal.ellipse(this.origX, this.origY, Math.abs(this.newX- this.origX), Math.abs(this.newY - this.origY), 0* Math.PI/180, 0, 2 * Math.PI)// rotation hardcoded as zero - use a JS text promt for user feedback?;
        this.contextReal.fill();
        this.contextReal.stroke();
        this.onFinish();
    }
    onMouseLeave(){}
    onMouseEnter(){}

    onFinish(){
        config.history.snapshot[config.history.action] = new Image();
        config.history.snapshot[config.history.action].src = canvasReal.toDataURL();
        config.history.action++;
    }

    // drawEllipse(x1, y1, x2, y2) {
    //     var radiusX = (x2 - x1) * 0.5,
    //         radiusY = (y2 - y1) * 0.5,
    //         centerX = x1 + radiusX,
    //         centerY = y1 + radiusY,
    //         step = 0.01,
    //         a = step,
    //         pi2 = Math.PI * 2 - step;
        
    //         this.contextDraft.beginPath();
    //         this.contextDraft.moveTo(centerX + radiusX * Math.cos(0), centerY + radiusY * Math.sin(0));
    
    //     for(; a < pi2; a += step) {
    //         this.contextDraft.lineTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));
    //     }
        
    //     this.contextDraft.closePath();
    //     this.contextDraft.fill();
    //     this.contextDraft.stroke();
    // }
    
}