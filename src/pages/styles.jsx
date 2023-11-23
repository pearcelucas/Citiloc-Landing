import { Link } from "react-router-dom";
import { styled } from "styled-components";
import BackgroungImg from "../images/background2.jpg"


export const Container = styled.div`
    background-image: url(${BackgroungImg});
    background-size: auto;
    
    
`

export const Titulo = styled.h1`
color: #004bae;
background-color: #dfe2f5;
padding: 2%;
font-size: 3vw;

`

export const Subtitulo = styled.h2`
    font-size: 3vw;
    background-color: #dfe2f5;
   
    padding-left: 1%;
    padding-top: 0;
    margin-top: 0;
    


`

export const Navegacao = styled.nav`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
              
    }
    
`

export const ImgLogo = styled.img`
    
    @media screen and (max-width: 768px){
        width: 30vw;
        align-self: center;

    }

`

export const Lista = styled.ul`
    display: flex;
    align-items: end;
    padding-bottom: 1vw;
    gap: 30px;
    list-style: none;

    @media screen and (max-width: 768px){
        justify-content: space-evenly;

        
    }
    
`

export const ItemLista = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 2vw;
    &:hover{
        color: #004bae;
    }
    
    @media screen and (max-width: 768px){
        font-size: 4vw;

        
    }
`

export const ImagemSliderHome = styled.img`
    width: 100%;
    max-height: 30vw;
    display: flex;

 
`

export const ImagemSlider = styled.img`
    max-height: 20vw;
    width: 100%;
    object-fit: contain;
    background-color: white;
    

    @media screen and (max-width: 768px){
        max-height: 40vw;
        width: 100%;
        object-fit: contain;
        background-color: white;}

`



export const Cards = styled.div`
display: flex;
margin: 0 auto;
max-width: 80%;
gap: 5%;
justify-content: center;
flex-wrap: wrap;

`

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 15%;
    margin-top: 5%;
    
`




export const ImgCircle = styled.img`
    
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
    width: 100%;
    border-radius: 50%;
    aspect-ratio: 1;
    
    
    
    `

export const CardCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
    width: 100%;
    
`

export const CardNome = styled.h2`
    margin: 5%;
    font-size: 2vw;
    color: white;
`

export const CardParceiro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5%;
    background-color: #dfe2f5;
    width: 30%;
    border-radius: 15px;

    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);

`

export const TituloCard = styled.h2`
    color: #004bae;
    font-size: 3vw;
    text-align: center;
 
    
`

export const ImagemCard = styled.img`
    max-width: 100%;
    height: 50%;
    
`

export const DescricaoCard = styled.p`
    
    font-size: 1.5vw;
    text-align: center;
    color: #004bae;
`

export const DivBotao = styled.div`
display: flex;
justify-content: center;
align-items: center;
    
`

export const Botao = styled(Link)`
margin-top: 2%;
margin-bottom: 2%;
width: 20vw;
background-color: #dfe2f5;
border-radius: 15px;
padding: 2%;
text-align: center;
text-decoration: none;
color: #004bae;
box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
font-size: 3vw;

@media screen and (max-width: 768px){
        width: 20vw;
        height: 3vw;
        font-size: 3vw;
        padding: 2%;
        
    }
`

export const ParceirosContainer = styled.div`
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    background-image: url(${BackgroungImg});
`



export const Whatsapp = styled.img`
    width: 50%;
`

export const Orcamento = styled.h2`
margin-top: 2%;
    background-color: white;
    color: green;
    /* font-size: 1.5vw; */
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    width: 70%;
`


export const BotaoWhatsapp = styled(Link)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 10%;
position: fixed;
z-index: 3;
bottom: 5%;
right: 0;
text-decoration: none;
font-size: 1.5vw;


@media screen and (max-width: 768px){
        width: 20%;
        font-size: 3vw;
        right: 0;
    }

`

export const Rodape = styled.footer`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    color: white;
    padding-bottom: 1%;
    margin-bottom: 0;
    
`

export const Sobre = styled.div`
    padding-left: 5%;
    padding-right: 2.5%;
    width: 40%;
    text-align: justify;

    @media screen and (max-width: 768px){
        font-size: 2vw;

        
    }
    
`


export const Divisoria = styled.hr`
    width: 100%;
    margin-top: 3%;
    margin-bottom: 3%;
`

export const CNPJ = styled.p`
    font-size: 1vw;
    font-style: italic;
`

export const Lista2 = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1%;
    list-style: none;
    color: white;
    height: 70%;
    justify-content: space-evenly;

    
`

export const MenuRapido = styled.div`

width: 30%;
padding-left: 2.5%;
padding-right: 2.5%;
padding-top: 2.5%;



`

export const TituloRodape = styled.h2`
    color: white;
    font-size: 1.5vw;
    margin-top: 10%;
    margin-bottom: 10%;
    font-weight: bolder;
    margin-top: 0;
    margin-bottom: 0;

    @media screen and (max-width: 768px){
        font-size: 3vw;
        
    }
`


export const ItemLista2 = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1vw;
    &:hover{
        color: #004bae;
    }
    
    @media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`
export const Endereco = styled.div`
display: flex;
margin-top: 10%;


@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
    
`

export const EnderecoTexto = styled.p`
    @media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`
export const LinkRodape = styled(Link)`
     @media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`
export const ImgRodape = styled.img`
    padding-right: 2%;
    width: 1.5vw;
     @media screen and (max-width: 768px){
        width: 2vw;
        
    }
`

export const ContatosEndereco = styled.div`

width: 30%;
padding-left: 2.5%;
padding-right: 5%;
padding-top: 2.5%;
`

export const Telefone = styled.div`
display: flex;
margin-top: 10%;
align-items: center;
@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
    
`
export const Email = styled.div`
display: flex;
margin-top: 10%;
@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`

export const Secao = styled.h2`
color: black;
background-color: #dfe2f5;
padding: 2%;
font-size: 3.5vw;
margin-left: 10%;
margin-right: 10%;


`

export const Item = styled.div`
display: flex;
justify-content: center;
margin: 5% 10%;
border: 1px solid black;

@media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        
    }
  

`

export const SlideFoto = styled.div`
width: 40%;
height: auto;
background-color: white;

@media screen and (max-width: 768px){
   width: 100%;
   height: auto;
}

`


export const ItemDescricao = styled.div`
background-color: #dfe2f5;
width: 60%;
padding: 2% 5%;
font-size: 2vw;
 
@media screen and (max-width: 768px){
        height: auto;
        width: 90%;
    }
`

export const ImgItem = styled.img`
    width: 30%;
    padding-right: 5%;
    padding-left: 5%;
    @media screen and (max-width: 768px){
        align-self: center;
        height:40%;
    }
    

`

export const ImgEventos = styled.img`
    width: 30%;
    padding-right: 5%;
    padding-left: 5%;
    @media screen and (min-width: 768px){
        display: none;
        
    }

`

export const FaleConosco = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #dfe2f5;
    width: 40%;
    padding-left: 1%;
    padding-bottom: 10%;
    

`

export const ContatosMapa = styled.div`
   display: flex;
   margin-left: 10%;
   margin-right : 10% ;
   justify-content: center;
   background-color: #dfe2f5;
   
   @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
   
   `

export const ImgContatos = styled.img`
    width: 10%;
   `
export const TextoContatos = styled.p`
    font-size: 2vw;
    align-self: center;
   `

export const LinkContatos = styled(Link)`
    text-decoration: none;
    color: black;
    align-self: center;
    font-size: 2vw;
  `
export const DivSlide = styled.div`
        width: 50%;


        @media screen and (max-width: 768px){
        display:none;
        
    }

    `

export const MapContainer = styled.div`
        width: 50%;
           @media screen and (max-width: 768px){
        overflow: hidden ;
    }
    `
export const TextoDescricao = styled.p`
        margin-top: 3%;
        font-size: 1.5vw;

        @media screen and (max-width: 768px){
        font-size: 2vw;
    }
    `



export const FormularioContainer = styled.div`
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    justify-content: center;
    gap: 5%;
    background-image: url(${BackgroungImg});
    `

export const CardFormulario = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    background-color: #dfe2f5;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
 
    `

export const DivFormulário = styled.form`
        
        
        
        
        `
export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    padding-left: 5%; 
    
    
    `
    export const CampoPergunta = styled.label`
        color: #004bae;
        font-size: 2vw;
        width: 100%;
        vertical-align: top;
        
    `
    export const CampoResposta = styled.input`
        color: black;
        font-size: 2vw;
        width: 90%;
        vertical-align: top;
        
    `
    export const CampoTexto = styled.textarea`
        font-size: 2vw;
        width: 90%;
       
    `
    export const BoataoEnvia = styled.button`
        color: blue;
        margin-bottom: 5%;
        margin-right: 10%;
        width: 20%;
        align-self: self-end;
        border-radius: 5px;
        font-size: 2vw;
        
        `