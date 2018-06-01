// UPLOAD FUNCTION
$('#uploadButton').click(()=>{

  // MERGING CANVASES
  var canvasA = document.getElementById('background');
  var canvasB = document.getElementById('bg-img');
  var canvasC = document.getElementById('canvas-real');
  var canvasD = document.getElementById('canvas-combined');

  var contextCombined = canvasD.getContext("2d");
  contextCombined.drawImage(canvasA,0,0);
  contextCombined.globalAlpha = bgOpacity;
  contextCombined.drawImage(canvasB,0,0);
  contextCombined.globalAlpha = 1;
  contextCombined.drawImage(canvasC,0,0);

  // CREATE A STORAGE REF
  var filename;
  $( function() {
    $('#dialog-form').submit( function(e) {
      e.preventDefault();
    });
    $( "#dialog-form" ).dialog({
        modal: true,
        closeOnEscape: true,
        open: function(event, ui) {
          $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
          },
        buttons: {
        Cancel: function() {$(this).dialog('close')},
        Ok: function() {

          // if (!filename) {
          //   alert("File name must be provided as a reference for download.");
          // } else {
            // $('#dialog-form').submit();
            filename = `${$('#imgFilename').val()}-${guid()}` ;
              $( this ).dialog( "close" );

              // CREATE A STORAGE REF

              // var time = getTime();
              var storageRef = firebase.storage().ref(`uploaded_img/${filename}`)

              // CONVERTING CANVAS TO BLOB
              var canvas = document.getElementById('canvas-combined');
              canvas.toBlob((blob)=>{
                
                  
                  // UPLOAD THE BLOB/FILE
                  var file = blob;
                  var task = storageRef.put(file);

                  // UPDATE PROGRESS BAR
                  task.on('state_changed', function progress (snapshot){
                      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      uploader.value = percentage;
                      },

                      function error(err) {
                      alert(err);
                      },

                      function complete() {
                        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                          $( function() {
                            $( "#dialog-message" ).html("Your canvas image has been uploaded to server successfully." + "<br /><br />" + "Copy and share the this unique key with your friends to let them play with your puzzle!" + "<br><br><strong>" + filename);
                            $( "#dialog-message" ).dialog({
                              modal: true,
                              width: "30%",
                              closeOnEscape: false,
                              open: function(event, ui) {
                                $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
                              },
                              buttons: {
                                "Share to Facebook": function(){
                                  var overrideDescription = `Come help me finish this drawing! Enter this private key to load it on your canvas: ${filename} Show me your creativity!`;
                                  var overrideImage = downloadURL;
                                  FB.ui({
                                    method: 'share_open_graph',
                                    action_type: 'og.shares',
                                    action_properties: JSON.stringify({
                                      object: {
                                        'og:title': "Join & Share",
                                        'og:description': overrideDescription,
                                        'og:image': overrideImage
                                      }
                                    })
                                  },
                                  function (response) {
                                  // Action after response
                                  });
                                },
                                "Share by email": function() {
                                  location.href = "mailto:?subject=Come help me finish this drawing!&body=Here's the drawing app I used to create the puzzle: http://khchick.com%0A%0AEnter this key to retrieve it: " + filename + "%0A%0AShow me your creativity!";
                                },
                                Ok: function() {
                                  $( this ).dialog( "close" );
                                }
                                
                              }
                            });
                          });
                        });
                      }
                  )
              });
          // }

        }
      }
    });
  });
})

// DOWNLOAD FUNCTION
$('#loadPuzzle').click(()=>{
  $( function() {

      $('#dialog-form-puzzle').submit( function(e) {
        e.preventDefault();
      });

      $( "#dialog-form-puzzle" ).dialog({
          modal: true,
          closeOnEscape: true,
          open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
            },
          buttons: {
          Cancel: function() {$(this).dialog('close')},
          Ok: function() {
            var filename = $('#puzzleFilename').val();
            $( this ).dialog( "close" );
            
            // Create a reference with an initial file path and name
            var storage = firebase.storage();

            var pathReference = storage.ref(`uploaded_img/${filename}`);

            pathReference.getDownloadURL().then(function(url) {
            // `url` is the download URL for the image
            console.log(url);
            
            // DRAW IMAGE ON CANVAS
            var puzzle = new Image();
            puzzle.crossOrigin = "Anonymous";
            puzzle.src = url;
            puzzle.onload = ()=> {
              contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
              contextReal.drawImage(puzzle,0,0);
              // NOTIFY USER
            $( "#dialog-message-puzzle" ).dialog({
              modal: true,
              // width: 'auto',
              closeOnEscape: false,
              open: function(event, ui) {
                $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
              },
              buttons: {
                "Draw Now": function() {
                  $( this ).dialog( "close" );
                }
              }
            });
            };
            })
            .catch(function(error) {
              alert(error);
            });
          }
          }   
        });
  });
})

// UNIQUE GUID GENERATION
function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

// FORM VALIDATION
var $inputs = $('#dialog-form :input:visible');
                    var inputCount = $('#dialog-form :input:visible').length;

                    $inputs.each(function() {
                            if ($(this).val() == null || $(this).val() == '' || $(this).val() == 0) {
                                $(this).focus();
                                $(this).css("background", "#F3DAFC");
                                return false;
                            } else if ($(this).val() != null) {
                                $(this).css("background", "white");
                                --inputCount;
                            }
                        });

