function calculo(){
    var v1 = parseFloat(document.getElementById('val1').value);
    var v2 = parseFloat(document.getElementById('val2').value);
    var op = document.getElementById('opera').value;
    var res;

    if((isNaN(v1)) || (isNaN(v2))){
        alert("INVÁLIDO! Somente números");
        return;
    }

    switch (op){
        case '+':
            res = v1+v2;
            alert(res);
            break;
        case '-':
            res = v1-v2;
            alert(res);
            break;
        case '*':
            res = v1*v2;
            alert(res);
            break;
        case '/':
            res = v1/v2;
            alert(res);
            break;
    }
}