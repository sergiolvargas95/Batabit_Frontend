const opcionesCriptomonedas = async() => {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    const respuesta = await fetch(url);
    const resultado = await respuesta.json()

    tabla(resultado)
}

tabla = resultado => {
    console.log(resultado)
}

opcionesCriptomonedas()