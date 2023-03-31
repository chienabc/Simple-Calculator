let input = document.getElementById('result');

function handleClick(value) {
	input.value += value;
    console.log(value)
   
}

function clearResult() {
	input.value = '';
    
}

function calculate() {
	input.value = eval(input.value);
    
}
