const listaDePecas = ["Ar condicionado", "motor","Amortecedor"]

console.log(listaDePecas)

if(listaDePecas.length < 2) {
    console.log("É possível cadastrar mais peças")
    } else { 
        console.log("Não é possível cadastrar mais peças")
    } 

    var peso = 150;

    if(peso >= 100) {  
    console.log(" A Peça está com peso ok!")
    } else { 
        console.log("Peso insuficiente!")
    }
    
  let nomePeca = "pá"

    if(nomePeca.length > 3) { 
        console.log("Nome adequado!")
    }
else if(nomePeca.length == 0) { 
    console.log("O nome da peça não pode estar vazio!")
} 
else {
    console.log ("O nome deve possuir mais de 3 caracteres!")
 }


 switch (nomePeca.length) {
     case 0:
         console.log("O nome não pode estar vazio!")
         break;

        
     case 1:
     case 2:
     case 3: 
        console.log("O nome deve possuir mais de 3 caracteres!")

 
     default:
         console.log("Nome adequado!")
         break;
 }



    