let firstNumber=prompt("Moi nhap so thu nhat");
let secondNumber=prompt("Moi nhap so thu hai");
let thirdNumber=prompt("Moi nhap so thu ba");
if(firstNumber>secondNumber & firstNumber>thirdNumber){
    document.write(`So lon nhat la ${firstNumber}`);
}else if(secondNumber>firstNumber & secondNumber>thirdNumber){
    document.write(`So lon nhat la ${secondNumber}`);
}else{
    document.write(`So lon nhat la ${thirdNumber}`);
}
