import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCoin from '../hooks/useSelectCoin'
import {coins} from '../data/coins'



const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`


const Form = ({setCoins}) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)


  const [coin, SelectCoin] = useSelectCoin('Elige tu Moneda',coins);
  const [criptoCoin, SelectCriptoCoin] = useSelectCoin('Elige tu CriptMoneda',criptos);

  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const response = await fetch(url)
      const result = await response.json()
      const arrayCriptos = result.Data.map(cripto => {
        const Object = {
          id:cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return Object
      })

      setCriptos(arrayCriptos)

    }
    consultarApi()
  }, []) 

  const handleSubmit = e => {
    e.preventDefault()

    if([coin,criptoCoin].includes('')){
      setError(true)

      return
    }
    setError(false)
    setCoins({
      coin,
      criptoCoin
    })

  }

  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error>}
    <form
      onSubmit={handleSubmit}
    >

      <SelectCoin />
      <SelectCriptoCoin />

      <InputSubmit
        type='submit'
        value='Cotizar'
      />
    </form>
    </>
  )
}

export default Form
