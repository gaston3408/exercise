/* export const apiEnv =  process.env.REACT_APP_URL_API + process.env.REACT_APP_SECRET */
export const apiEnv = "http://api.tenlek.com/a70da940ce76c1217f03376a3ac725fc"

export const defaultHeaders = {
        method: "GET",
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*'
        },
}

export const meditions = [
    {url:"presionDirecta", data:"Presion Directa"},
    {url:"presionAnular", data:"Presion Anular"},
    {url:"viento", data:"Viento"},
    {url:"pesoEnGancho", data:"Peso en Gancho"},
    {url:"pesoAplicado", data:"Peso Aplicado"},
    {url:"nivelPileta", data:"Nivel de Pileta"}
]