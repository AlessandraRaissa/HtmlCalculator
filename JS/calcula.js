function calculo(){
    let v1 = parseFloat(document.getElementById('val1').value);
    let v2 = parseFloat(document.getElementById('val2').value);
    let op = document.getElementById('opera').value;
    let res;

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

function lightMode(){
    window.document.getElementById('light').style.display = 'none';
    window.document.getElementById('dark').style.display = 'flex';
    window.document.querySelector('body').style.backgroundColor = 'white';
    window.document.querySelector('body').style.color = 'black';
}

function darkMode(){
    window.document.getElementById('dark').style.display = 'none';
    window.document.getElementById('light').style.display = 'flex';
    window.document.querySelector('body').style.backgroundColor = 'black';
    window.document.querySelector('body').style.color = 'white';
    window.document.getElementById('alert').style.color = 'blue';
}

function nameVal(){
    let name = nam.nome.value;
    let texto = window.document.getElementById('text');

    if (name == "") {
        document.getElementById('alert').style.display = 'flex';
    } else {
        document.getElementById('alert').style.display = 'flex';
        TextDecoder.innerHTML = '<h1>Bem vindo</h1>' + name + '<h1> !</h1>';
    }
}