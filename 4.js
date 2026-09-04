const fatorial_recursivo = (numero,fator) => {
    let fatorial = numero;
    if (fator === 0) { return  fatorial } else {
        fatorial = fatorial *fator
       return fatorial_recursivo(fatorial,fator-1)
    }
}
console.error(fatorial_recursivo(1,5))
const fatorialRecusrivo=(n)=>{
    let delimitador=n
    let resultado=1
    while(n!==0){
        if(delimitador===1){
            return resultado
        }
        resultado=resultado*delimitador
        delimitador--
    }
}
console.error(fatorialRecusrivo(5))