function runCode()
{
	var input;
	//register util functions
	eval(document.getElementById('utilFunctions').value);
	
	var file = document.getElementById('inputFile').files[0]
	if(file)
	{
		var reader = new FileReader();
		reader.onload = function(e) {
			input = e.target.result;
			document.getElementById("result").innerHTML = eval(document.getElementById('mainCode').value);
		}
		reader.readAsText(file);
	}
	else
	{
		document.getElementById("result").innerHTML = eval(document.getElementById('mainCode').value);
	}
}