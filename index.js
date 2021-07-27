const translateBtn = document.querySelector("#btn-translate");
const clearBtn = 	document.querySelector("#btn-clear");
let input = document.querySelector("#inputTextBox");
let output = document.querySelector("#outputTextBox");

const morseCode = {
	"A": ".-",
	"B": "-...",
	"C": "-.-.",
	"D": "-..",
	"E": ".",
	"F": "..-.",
	"G": "--.",
	"H": "....",
	"I": "..",
	"J": ".---",
	"K": "-.-",
	"L": ".-..",
	"M": "--",
	"N": "-.",
	"O": "---",
	"P": ".--.",
	"Q": "--.-",
	"R": ".-.",
	"S": "...",
	"T": "-",
	"U": "..-",
	"W": ".--",
	"X": "-..-",
	"Y": "-.--",
	"Z": "--..",
	" ": " "
 }
// Rohan Nirmal
 function convertToMorse(text){
	let output = "";
	for(let i = 0; i<text.length;i++){
		if(text[i].toUpperCase() in morseCode){ 
			output+= morseCode[text[i].toUpperCase()];
		}
		//console.log(text[i].toUpperCase());
	}
	return output;
 }
//  console.log(convertToMorse('Nikhil'));
//  console.log(convertToMorse('hELLO?!!!!'));


function oncl(){
let inputvalue = input.value;
//console.log(inputvalue);

let outputvalue = convertToMorse(inputvalue);
output.value = outputvalue;
}

function clearall() {
	input.value = "";
	output.value = "";
}