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

