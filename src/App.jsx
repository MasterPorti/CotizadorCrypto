import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import InfoCrypto from './components/InfoCrypto'
import Imagen from './img/imagen-criptos.png'
import { useState } from 'react'
const Contenedor = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:3rem;
  height:100vh;
`

const ContenedorFormulario = styled.div`
  display:flex;
  align-items:center;
  @media (max-width: 700px) {
    flex-direction:column;
  }
  `

const Heading = styled.h1`
  font-weight:700;
  font-size:1.5rem;
  width:20rem;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  &::after{
    content:'';
    width:100px;
    height:6px;
    background-color: #66a2fe;
    display:block;
    margin:10px;
  }
`
const Imagenes = styled.img`
  width:20rem;
`

function App () {
  const [monedas, setMonedas] = useState([])
  return (
    <>
      <Contenedor>
        <ContenedorFormulario>
          <Imagenes
            src={Imagen}
            alt='Imagen de Criptomonedas'
          />
          <div>
            <Heading>Cotiza Criptomonedas al Instante</Heading>
            <Formulario setMonedas={setMonedas} />
          </div>
        </ContenedorFormulario>
        {monedas.length !== 0 && <InfoCrypto monedas={monedas} />}
      </Contenedor>

    </>
  )
}

export default App
