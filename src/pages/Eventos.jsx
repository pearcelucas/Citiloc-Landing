import { Container, DivSlide, ImgEventos, Item, ItemDescricao, Secao, SlideFoto, Subtitulo, } from "./styles"
import { Slide } from "../components/slider"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"
import evento1 from "../images/Estrutura/Castelao.jpeg"
import evento2 from "../images/Estrutura/Palco.jpeg"
import { SliderCastelao } from "../components/SliderCastelao"
import { SliderUece } from "../components/Slider UECE"
import CardEventos2 from "../components/CardsEventos"

<images />

export const Eventos = () => {
    return (
        <Container>
            <Secao>Eventos</Secao>
            <CardEventos2/>
            
            {/* <Item>
                <SlideFoto>
                    <SliderCastelao/>
                </SlideFoto>
                      <ItemDescricao>
                    <Subtitulo>Jogos dos times cearenses</Subtitulo>
                    <p>Atendemos aos jogos dos times cearenses na Arena Castelão e no estaio Presidente Vargas.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <SlideFoto>
                    <SliderUece/>
                </SlideFoto>
                <ItemDescricao>
                    <Subtitulo>Encontros Universitário UECE</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item> */}
            <Whats />
            <NavRodape />

        </Container>
    )
}
