const fibonacciRecursiva=(a,b,n)=>{
    if(n==0){return a}console.error(a)
    return fibonacciRecursiva(a+b,b=a,n-1)}
const fibonacciInterativa=(n)=>{
    let anterio=1
    let atual=1
    let parar=n
    while(n!==0){
        if(parar===0){
            return atual
        }
        atual=atual+anterio
        anterio=(atual-anterio)
        parar--
    }
}
console.log(fibonacciRecursiva(1,1,7),'\n')
console.log(fibonacciInterativa(7))