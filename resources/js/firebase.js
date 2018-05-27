       // FILE UPLOADER
    //    var uploader = document.getElementById('uploader');
    //    var fileButton = document.getElementById('fileButton');

    //    fileButton.addEventListener('change', function(e) {
           // GET FILE
        //    var file = e.target.files[0];

           // CREATE STORAGE REF
        //    var storageRef = firebase.storage().ref('canvas_bg/' + file.name);

           // UPLOAD FILE
        //    var task = storageRef.put(file);

           // UPDATE PROGRESS BAR
    //        task.on('state_changed',
    //        function progress(snapshot) {
    //            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //            uploader.value = percentage;
    //        },      
    //        function error(err) {
    //            console.log(err);
    //        },
    //        function complete() {
    //            alert("Background image uploaded.");
    //        })

    //    })