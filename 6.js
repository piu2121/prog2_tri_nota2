const SomaReLista=(lista)=>{
    let a=lista[0]
    let b=lista.length-1
    let l=lista
    const bb=lista[b]
    if(b>0){
        l.splice(b,1)
        l[0]=(bb+a)
        return SomaReLista(l)
    }else{
        return a
    }
}
console.error(SomaReLista([10, 20, 5, 3]))