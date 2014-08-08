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
var button_detect_end;
var input_account; 
var account;
var button_show;

var photo01;
var photo02;
var photo03;
var photo04;
var photo05;
var photo06;
var photo07;
var photo08;
var photo09;
var photo10;

function deleteStorageInstallation(e)
{
	console.log(e);
	localStorage.removeItem(e.target.id);
	e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}

var forceRedraw = function(element){

    if (!element) { return; }

    var n = document.createTextNode(' ');
    var disp = element.style.display;  // don't worry about previous display style

    element.appendChild(n);
    element.style.display = 'none';

    setTimeout(function(){
        element.style.display = disp;
        n.parentNode.removeChild(n);
    },20); // you can play with this timeout to make it as short as possible
}

function handleInputAccount(e)
{
	e.target.value = e.target.value.replace(/\D/g,'');	
}

function logger(str)
{
	var loggerDiv = document.querySelector("#logger");
	var p = document.createElement('p');
	p.innerHTML = str;
	loggerDiv.appendChild(p);
}

function init() {		
	logger('init');
	input_files = document.querySelector('#input_files');
	button_detect_confirm = document.querySelector('#detect_confirm');
	button_detect_confirm.onclick = function () {		
		console.log('button detect confirm');
		logger('button detect confirm');
		input_account = document.querySelector('#account'); 
		account = input_account.value;		
		console.log(account);
		
		input_files.style.display = 'block';
	}	
	/* Сохранить регистрацию */
	button_detect_end = document.querySelector('#detect_end');
	button_detect_end.onclick = function () {
		console.log('button detect end onclick');				
		logger('button detect end onclick');				
		var theInputFile01 = document.querySelector('#file01').files[0];		
		console.log(theInputFile01);		
		logger(theInputFile01);		

		var reader01;		
		reader01 = new FileReader();
		reader01.onload = function(e) {
			photo01 = e.target.result;
			RunReader02();
		}
		reader01.readAsDataURL(theInputFile01);		
	}
	/* Показать регистрации */
	button_detect_show = document.querySelector('#detect_show');
	button_detect_show.onclick = function () {
		console.log('button detect show onclick');				
		var accounts = document.querySelector('#detect_accounts');
		while (accounts.firstChild)	{
			accounts.removeChild(accounts.firstChild);
		}
		for (var i=0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			var value = localStorage[key];
			console.log(key);
			var p = document.createElement('p');
			p.innerHTML = key;
				var a = document.createElement('a');
				a.id=key;
				a.href="#";
				a.innerHTML="Удалить";
				a.onclick = deleteStorageInstallation;
			p.appendChild(a);			
			accounts.appendChild(p);
		}
	}
	/* Валидация лицевого счёта */
	input_account = document.querySelector('#account');
	input_account.oninput = handleInputAccount;



	
	input_file01 = document.querySelector('#fieldfile01');
	input_file02 = document.querySelector('#fieldfile02');
	input_file03 = document.querySelector('#fieldfile03');
	input_file04 = document.querySelector('#fieldfile04');
	input_file05 = document.querySelector('#fieldfile05');
	input_file06 = document.querySelector('#fieldfile06');
	input_file07 = document.querySelector('#fieldfile07');
	input_file08 = document.querySelector('#fieldfile08');
	input_file09 = document.querySelector('#fieldfile09');
	input_file10 = document.querySelector('#fieldfile10');	
	
	file01 = document.querySelector('#file01');
	file02 = document.querySelector('#file02');
	file03 = document.querySelector('#file03');
	file04 = document.querySelector('#file04');
	file05 = document.querySelector('#file05');
	file06 = document.querySelector('#file06');
	file07 = document.querySelector('#file07');
	file08 = document.querySelector('#file08');
	file09 = document.querySelector('#file09');
	file10 = document.querySelector('#file10');

	input_file01.onchange = function () {	input_file02.style.display = 'block'; console.log(file01.files[0].name);}
	input_file02.onchange = function () {	input_file03.style.display = 'block'; console.log(file02.files[0].name);}
	input_file03.onchange = function () {	input_file04.style.display = 'block'; console.log(file03.files[0].name);}
	input_file04.onchange = function () {	input_file05.style.display = 'block'; console.log(file04.files[0].name);}
	input_file05.onchange = function () {	input_file06.style.display = 'block'; console.log(file05.files[0].name);}
	input_file06.onchange = function () {	input_file07.style.display = 'block'; console.log(file06.files[0].name);}
	input_file07.onchange = function () {	input_file08.style.display = 'block'; console.log(file07.files[0].name);}
	input_file08.onchange = function () {	input_file09.style.display = 'block'; console.log(file08.files[0].name);}
	input_file09.onchange = function () {	input_file10.style.display = 'block'; console.log(file09.files[0].name);}
	input_file10.onchange = function () {	button_detect_end.style.display = 'block'; console.log(file10.files[0].name);}
	
}

function RunReader10() {	
		logger('RunReader10');		
		var theInputFile = document.querySelector('#file10').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo10 = e.target.result;
			RunReaderEnd();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReader09() {	
		logger('RunReader09');
		var theInputFile = document.querySelector('#file09').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo09 = e.target.result;
			RunReader10();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReader08() {	
		logger('RunReader08');
		var theInputFile = document.querySelector('#file08').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo08 = e.target.result;
			RunReader09();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReader07() {	
		logger('RunReader07');
		var theInputFile = document.querySelector('#file07').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo07 = e.target.result;
			RunReader08();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReader06() {	
		logger('RunReader06');
		var theInputFile = document.querySelector('#file06').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo06 = e.target.result;
			RunReader07();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReader05() {	
		logger('RunReader05');
		var theInputFile = document.querySelector('#file05').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo05 = e.target.result;
			RunReader06();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReader04() {	
		logger('RunReader04');
		var theInputFile = document.querySelector('#file04').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo04 = e.target.result;
			RunReader05();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReader03() {	
		logger('RunReader03');
		var theInputFile = document.querySelector('#file03').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo03 = e.target.result;
			RunReader04();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReader02() {	
		logger('RunReader02');
		var theInputFile = document.querySelector('#file02').files[0];	
		var reader;		
		reader = new FileReader();
		reader.onload = function(e) {
			photo02 = e.target.result;
			RunReader03();
		}
		reader.readAsDataURL(theInputFile);	
}

function RunReaderEnd() {
		logger('RunReaderEnd');
		var installation = new Installation(account, photo01, photo02, photo03, photo04, photo05, photo06, photo07, photo08, photo09, photo10);		
		
		console.log(installation);
				
		console.log(JSON.stringify(installation));									
		
		SaveInstallation(installation);
		
		var a = localStorage.getItem("installation");
		console.log(a);
		var aa = JSON.parse(a);
		console.log(aa);
}

function SaveInstallation(installation) {
	/*
	logger('SaveInstallation');
	localStorage.setItem(installation.account, JSON.stringify(installation));	
	*/
	UploadInstallation(installation);
}

function UploadInstallation(installation) {
	logger('UploadInstallation');
	var form = new FormData(),
	xhr = new XMLHttpRequest();
		
	form.append('account', installation.account);
	form.append('photo01', installation.photo01);
	form.append('photo02', installation.photo02);
	form.append('photo03', installation.photo03);
	form.append('photo04', installation.photo04);
	form.append('photo05', installation.photo05);
	form.append('photo06', installation.photo06);
	form.append('photo07', installation.photo07);
	form.append('photo08', installation.photo08);
	form.append('photo09', installation.photo09);
	form.append('photo10', installation.photo10);
	form.append('installator', installation.installator);
	form.append('created_at', installation.created_at);
	form.append('updated_at', installation.updated_at);
	xhr.open('post', 'http://10.198.1.45/show.php', true);
	xhr.onload = function(oEvent) {
	logger('xhr.onload');
		try {
				if (xhr.status == 200) {			
					console.log("Uploaded!");
					logger('Uploaded!');
					console.log(xhr.responseText);
					console.log(xhr.responseBody);
			
				} else {
					console.log("Error " + xhr.status + " occurred uploading your file.");
					logger("Error " + xhr.status + " occurred uploading your file.");
				}
			}		
			catch(err) {
				console.log(err);
				logger(err);			
			}		
  	};
	xhr.onreadystatechange = function(oEvent) {
		logger('xhr.onload');
	}
	xhr.send(form);
}
    
window.onload = init;

			
			
			
			var input = document.querySelector('input[type=file]'); 
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
