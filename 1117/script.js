let resultado = document.getElementById("resultado")

function calcularMedia(){
    let n1 = Number(document.getElementById("inputN1").value)
    let n2 = Number(document.getElementById("inputN2").value)

if(n1>=0 && n1<=10 && n2 >= 0 && n2 <= 10){
    let media = (n1+n2)/2
    resultado.innerHTML = "Média: " + media


}else{
    alert("nota inválida!")
}

}
