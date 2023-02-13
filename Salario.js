var salarioInic = prompt("Insira o salario inicial");
var metaSalarial = prompt("Insira uma meta a atingir");
var salario = salario

function calculoSalario(salarioInic,metaSalarial){
  for (var i=0;salarioInic<metaSalarial;i++){
    salarioInic=salarioInic*1.1; 
  }
  return i*6;
}

alert(`Precisa de ${calculoSalario(salarioInic,metaSalarial)} meses de trabalho  para atingir o seu salario desejado de R$${metaSalarial}`);