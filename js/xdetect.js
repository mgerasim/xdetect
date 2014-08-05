var button_detect_confirm;
var input_files;
var input_file01;
var input_file02;
var input_file03;
var input_file04;
var input_file05;
var input_file06;
var input_file07;
var input_file08;
var input_file09;
var input_file10;

function init() {		
	input_files = document.querySelector('#input_files');
	button_detect_confirm = document.querySelector('#detect_confirm');
	button_detect_confirm.onclick = function () {
		input_files.style.display = 'block';
	}	
	input_file01 = document.querySelector('#file01');
	input_file02 = document.querySelector('#file02');
	input_file03 = document.querySelector('#file03');
	input_file04 = document.querySelector('#file04');
	input_file05 = document.querySelector('#file05');
	input_file06 = document.querySelector('#file06');
	input_file07 = document.querySelector('#file07');
	input_file08 = document.querySelector('#file08');
	input_file09 = document.querySelector('#file09');
	input_file10 = document.querySelector('#file10');
	button_detect_end = document.querySelector('#detect_end');
	input_file01.onchange = function () {	input_file02.style.display = 'block';	}
	input_file02.onchange = function () {	input_file03.style.display = 'block';	}
	input_file03.onchange = function () {	input_file04.style.display = 'block';	}
	input_file04.onchange = function () {	input_file05.style.display = 'block';	}
	input_file05.onchange = function () {	input_file06.style.display = 'block';	}
	input_file06.onchange = function () {	input_file07.style.display = 'block';	}
	input_file07.onchange = function () {	input_file08.style.display = 'block';	}
	input_file08.onchange = function () {	input_file09.style.display = 'block';	}
	input_file09.onchange = function () {	input_file10.style.display = 'block';	}
	input_file10.onchange = function () {	button_detect_end.style.display = 'block';	}
	button_detect_end.onclick = function () {		}
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
			  
			  drawOnCanvas(file); 
			  displayAsImage(file);
			  */
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
