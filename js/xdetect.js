var button_detect_confirm;
var input_files;
function init() {		
	input_files = document.querySelector('#input_files');
	button_detect_confirm = document.querySelector('#detect_confirm');
	button_detect_confirm.onclick = function () {
		input_files.style.display = 'block';
	}	
}
    
window.onload = init;

			input_files.onclick = function () {
				alert("F");
			}
			
			
			
			var input = document.querySelector('input[type=file]'); // see Example 4

			input.onchange = function () {

			  var file = input.files[0];
			
				/*
			  upload(file);
			  */
			  drawOnCanvas(file); 
			  displayAsImage(file);
			};
			
			function upload(file) {
			  var form = new FormData(),
				  xhr = new XMLHttpRequest();
			
			  form.append('image', file);
			  xhr.open('post', 'server.php', true);
			  xhr.send(form);
			}
			
			function drawOnCanvas(file) {
				  var reader = new FileReader();
				
				  reader.onload = function (e) {
					var dataURL = e.target.result,
						c = document.querySelector('canvas'), // see Example 4
						ctx = c.getContext('2d'),
						img = new Image();
				
					img.onload = function() {
					  c.width = img.width;
					  c.height = img.height;
					  ctx.drawImage(img, 0, 0);
					};
				
					img.src = dataURL;
				  };
				
				  reader.readAsDataURL(file);
			}
			
			function displayAsImage(file) {
			  var imgURL = URL.createObjectURL(file),
				  img = document.createElement('img');
			
			  img.onload = function() {
				URL.revokeObjectURL(imgURL);
			  };
			
			  img.src = imgURL;
			  document.body.appendChild(img);
			}
