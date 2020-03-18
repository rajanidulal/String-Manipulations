const fs = require("fs");
const readme="input.txt";
const file = fs.readFileSync(readme,{encoding:'utf8'});
console.log("Original input:", file);
let data = file.replace(/[\W_]+/g, " ").split(',')

data = data.toString().trim()
const lowerCase = (data)=> data.toLowerCase();
console.log("This is lowercase: \n"+lowerCase(data));

const camelCase = (data) => data.toLowerCase().replace(/[(?:^|\s)]\w/g, c=> c.toUpperCase())
const eachstr = camelCase(data).replace(/ /g, '');
console.log("This is camelCase: \n"+ eachstr);


const snakeCase= (result)=>result.replace(/ /g, '_');
console.log("This is snakeCase: \n"+ snakeCase(lowerCase(data)));

const dashCase= (result1)=>result1.replace(/ /g, '-');
console.log("This is dashCase: \n"+ dashCase(lowerCase(data)));

const dotCase= (result2)=>result2.replace(/ /g, '.');
console.log("This is dotCase: \n"+ dotCase(lowerCase(data)));

const pathCase= (result3)=>result3.replace(/ /g, '/');
console.log("This is pathCase: \n"+pathCase(lowerCase(data)));

const properCase = (data) => data.toLowerCase().replace(/(?:^|\s)\w/g, c=> c.toUpperCase())
const eachstr1 = properCase(data).replace(/ /g, '');
console.log("This is properCase: \n"+eachstr1);

const sentenceCase = (result4)=>result4.replace(/[a-z]/i,p=>p.toUpperCase());
console.log("This is sentenceCase: \n"+sentenceCase(lowerCase(data)+ ",")); 

const constantCase= (result5)=>result5.toUpperCase().replace(/ /g, '_');
console.log("This is constantCase: \n"+constantCase(data));

const titleCase= (result6)=>result6.replace(/ /g, ' ');
console.log("This is titleCase: \n"+titleCase(properCase(data)));
function escapeHTML(params)
{
	let str = params.replace(/[\W_]+/g, function(x)
	{
		switch(x)
		{
			case '&': 
				return ' &amp; ' ;
			case '<':
				return ' $lt; ';
			case '>':
				return ' &gt; ';
			case '"':
				return ' &quot; ';
			case "'":
				return ' &#39; ';	
			case "/":
				return ' &#x2F; ';
			case "`":
				return '&#x60; ';
			case "=":
				return ' &#x3D; ';
			default: 
				return '$#x' + x.charCodeAt(0).toString(16);
		}
	})
	console.log("This is HTML escaping : \n"+str)
}


function escapeJavascript(params)
{
	
	let str = params.replace(/[\W_]+/g, function(x)
	{
		return '/x' + x.charCodeAt(0).toString(16);
	})
	console.log("This is Javascript escaping : \n "+str)
}



function escapeJSON(params)
{
		var str = params.replace(/[\W_]+/g, function(x)
	{
		return '\\u00' + x.charCodeAt(0).toString(16);
	})
	console.log("This is JSON escaping: \n "+ str)
} 

escapeHTML(file) 
escapeJavascript(file)
escapeJSON(file)
