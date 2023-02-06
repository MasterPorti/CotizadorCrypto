import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
display:flex;
align-items:center;
gap:2rem;
`
const Imagen = styled.img`
width:10rem;
`

const Parrafo = styled.p`
font-size:1.5rem;
font-weight:700;
`

const Precio = styled.span`
font-size:1.2rem;
font-weight:700;
`

function InfoCrypto ({ monedas }) {
  const [resultado, setResultado] = useState({})
  useEffect(() => {
    if (monedas.length !== 0) {
      const consultarApi = async () => {
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas[0]}&tsyms=${monedas[1]}`
        const response = await fetch(URL)
        const data = await response.json()
        setResultado(data.DISPLAY[monedas[0]][monedas[1]])
      }
      consultarApi()
    }
  }, [monedas])
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com${resultado.IMAGEURL}`} alt='imagen' />
      <div>
        <Parrafo>El precio Actual es de: {' '}{resultado.PRICE}</Parrafo>
        <p>El precio mas alto del dia:<Precio>{' '}{resultado.HIGHDAY}</Precio></p>
        <p>El precio mas bajo del dia:<Precio>{' '}{resultado.LOWDAY}</Precio></p>
        <p>Variacion en 24h <Precio>{' '}{resultado.CHANGEPCT24HOUR}</Precio></p>
        <p>Ultima Actualizacion<Precio>{' '}{resultado.LASTUPDATE}</Precio></p>
      </div>
    </Contenedor>
  )
}

export default InfoCrypto
