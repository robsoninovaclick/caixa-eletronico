
const nCedulas = (valor) => {
    let num = 0
    let n200, n100, n50, n20, n10, n5, n2, n1

    n200 = Math.floor(valor / 200)
    if (n200 != 0){
        valor -= (n200 * 200)
    }
    n100 = Math.floor(valor / 100)
    if (n100 != 0){
        valor -= (n100 * 100)
    }
    n50 = Math.floor(valor / 50)
    if (n50 != 0){
        valor -=  (n50 * 50)
    }
    n20 = Math.floor(valor / 20)
    if (n20 != 0){
        valor -= (n20 * 20)
    }
    n10 = Math.floor(valor / 10)
    if (n10 != 0){
        valor -= (n10 * 10)
    }
    n5 = Math.floor(valor / 5)
    if (n5 != 0){
        valor -= (n5 * 5)
    }
    n2 = Math.floor(valor / 2)
    if (n2 != 0){
        valor -= (n2 * 2)
    }
    n1 = Math.floor(valor / 1)
    if (n1 != 0){
        valor -= (n1 * 1)
    }
    /*
    console.log(n200 + " nota(s) de 200")
    console.log(n100 + " nota(s) de 100")
    console.log(n50 + " nota(s) de 50")
    console.log(n20 + " nota(s) de 20")
    console.log(n10 + " nota(s) de 10")
    console.log(n5 + " nota(s) de 5")
    console.log(n2 + " nota(s) de 2")
    console.log(n1 + " nota(s) de 1")
    */
    num = n200 + n100 + n50 + n20 + n10 + n5 + n2 + n1

    console.log(num + " cédulas utilizadas")
}


nCedulas(process.argv[2])