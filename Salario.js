var salarioInic = prompt("Insira o salario inicial");
var metaSalarial = prompt("Insira uma meta a atingir");

for (i=0; salarioInic<metaSalarial;i++){
  salarioInic=salarioInic*1.1;
} 
alert(`Precisa de `+i*6+` meses de trabalho (ou ${i} semestre/s) para atingir o seu salario desejado de R$${metaSalarial}`);