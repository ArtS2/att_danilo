function multiplicacaoImpossivel(a, b) {
    if (a === 0 || b === 0) {
      return 0
    }
  
    let resultado = 0
  
    for (let i = 0; i < b; i++) {
      resultado += a
    }
  
    return resultado
  }
  console.log(multiplicacaoImpossivel(1,65))