window.onload = function() {

    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');


    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                // fileDisplayArea.innerHTML = "";

                var img = new Image();
                img.src = reader.result;
                render(img.src);

                // fileDisplayArea.appendChild(image);
            }

            reader.readAsDataURL(file);	
        } else {
            fileDisplayArea.innerHTML = "File not supported!"
        }
    });

}

var MAX_HEIGHT = canvasReal.height;
var MAX_WIDTH = canvasReal.width;
function render(src){
	var image = new Image();
	image.onload = function(){
		var canvas = document.getElementById("bg-img");
		if(image.height > MAX_HEIGHT) {
			image.width *= MAX_HEIGHT / image.height;
			image.height = MAX_HEIGHT;
        }
        if(image.width > MAX_WIDTH) {
			image.height *= MAX_WIDTH / image.width;
			image.width = MAX_WIDTH;
		}
		var ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// canvas.width = image.width;
		// canvas.height = image.height;
		ctx.drawImage(image, (canvas.width-image.width)/2, (canvas.height-image.height)/2, image.width, image.height);
	};
	image.src = src;
}

