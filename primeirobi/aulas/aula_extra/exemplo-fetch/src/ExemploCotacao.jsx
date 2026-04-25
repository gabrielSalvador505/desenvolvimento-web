import { useEffect, useState } from "react"

export default function App() {

    const [loading, setLoading] = useState(false)
    const [valorBtc, setValorBtc] = useState(undefined)
    //https://economia.awesomeapi.com.br/json/last/BTC

    useEffect(() => {
        fetch("https://economia.awesomeapi.com.br/json/last/BTC")
            .then(response => response.json())
            .then(json => setValorBtc(json.BTCBRL.bid))
            .catch(error => console.log(error))
    }, [])

    return (
        <main>
            <h1>Teste useEffect</h1>
            <button onClick={() => setLoading(!loading)}>
                Trigger
            </button>
            { valorBtc &&
                <p>
                    {Number.parseFloat(valorBtc).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
            }
        </main>
    )
}