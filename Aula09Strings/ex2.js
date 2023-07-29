let varA= 'A';
let varB='B';
let varC='C';
let varZ;

console.log(varA,varB, varC);

varZ=varA;
varA=varC;
varC=varB;
varB=varZ;

console.log(varA,varB, varC);

//ou

varA= 'A';
varB="B";
varC='C';

[varA,varB,varC]=[varB, varC, varA];
console.log(varA,varB,varC);