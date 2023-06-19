function booleano(numero){
    const tipo = typeof numero
    if (tipo == 'boolean') return !numero
    else if (tipo == 'number') return -numero
    else 
    return `Booelano ou Número esperados, mas o parâmetro é do tipo' ${tipo}`


}
console.log(booleano(-1))
console.log(booleano(false))
console.log(booleano(true))