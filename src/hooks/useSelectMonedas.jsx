import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
  font-weight:700;
  font-size:1.3rem;
`

const Option = styled.option`
  color: #222;
  background-color:'#fafafa';
  width:100%;
`

const Select = styled.select`
  width:100%;
  height:1.7rem;
  color:#222;
  border-radius:10px;
  background-color:#fafafa;
  margin-top:.5rem;
`

function useSelectMonedas (label, opciones) {
  const [state, setState] = useState('')
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <Option value=''>Seleciona</Option>
        {opciones.map(
          opcione => <Option value={opcione.id} key={opcione.id}>{opcione.nombre}</Option>)}
      </Select>
    </>
  )
  return [state, SelectMonedas]
}

export default useSelectMonedas
