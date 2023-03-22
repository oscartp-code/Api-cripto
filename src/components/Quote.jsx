import styled from "@emotion/styled"

const Container = styled.div `
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Image = styled.img`
    display: block;
    width: 150px;
`

const Quote = ({quote}) => {
    const {PRICE, HIGHDAY,LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = quote
  return (
    <Container>
        <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen-Cripto'/>
      <div>
        <Precio>EL precio es de: <span>{PRICE}</span></Precio>
        <Texto>EL precio mas alto del dia fue: <span>{HIGHDAY}</span></Texto>
        <Texto>EL precio mas bajo del dia fue: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion de las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima Actualizacion:  <span>{LASTUPDATE}</span></Texto>
      </div>
    </Container>
  )
}

export default Quote
