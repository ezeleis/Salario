var salarioInic = prompt("Insira o salario inicial");
var metaSalarial = prompt("Insira uma meta a atingir");
var salario = salarioInic;

for (i=0; salario<metaSalarial;i++){
  salario=salario*1.1;
} 
alert(`Precisa de `+i*6+` meses de trabalho (ou ${i} semestre/s) para atingir o seu salario desejado de R$${metaSalarial}`);