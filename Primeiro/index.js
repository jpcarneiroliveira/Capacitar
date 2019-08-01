function Ordenanumeros() {

    var Qnumero = window.prompt("digite a quantidade de numeros que serão inseridos");
    var sequencia = [];
    var primo = 0;
    for (i = 0; i < Qnumero; i++) {
        var numero = prompt("digite um numero");
        sequencia.push(numero);
        var qp = 0;
        for (j = 1; j <= numero; j++) {
            if (numero % j == 0) {
                qp++;
            }
        }
        if (qp == 2) {
            primo++;
        } else {}

        console.log(sequencia);
        console.log(primo);

    }

}
Ordenanumeros();