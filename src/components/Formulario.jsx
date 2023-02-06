import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
const InputSubmit = styled.input`
    cursor: pointer;
    width:100%;
    background-color:#2d5bdb;
    text-align:center;
    padding:.5rem;
    font-weight:700;
    font-size:1.5rem;
    border-radius:.3rem;
    transition: background-color .5s ease;
    //text-transform: uppercase;
    &:hover{
        background-color:#002897;
    }
`

const Formulario = ({ setMonedas }) => {
  //* Cracion de crypto que sirve por que adelante se utilizara en la parte del fetch
  const [cryptos, setCryptos] = useState([])
  //* Para agregar error en caso que el formulario falle
  const [error, setError] = useState('')

  // * Peticion de la API para ponerlo como opciones en la parte de <SelectCrypto/>
  useEffect(() => {
    const consultarApi = async () => {
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resoponse = await fetch(URL)
      const data = await resoponse.json()
      const arrayCryptos = data.Data.map(cripto => {
        const criptoInfo = { id: cripto.CoinInfo.Name, nombre: cripto.CoinInfo.FullName }
        return criptoInfo
      })
      setCryptos(arrayCryptos)
    }
    consultarApi()
  }, [])

  // * Importa los hooks 👻
  const [stateMonedas, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
  const [stateCrypto, SelectCrypto] = useSelectMonedas('Elige tu cryptomoneda', cryptos)

  // * Esto es la verificacion de formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    if ([stateCrypto, stateMonedas].includes('')) {
      return setError('Selecciona todos los campos')
    }
    setError('')
    setMonedas([stateCrypto, stateMonedas])
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <SelectMonedas />
      <SelectCrypto />
      <InputSubmit
        type='submit'
        value='Cotizar'
      />
    </form>
  )
}

export default Formulario
