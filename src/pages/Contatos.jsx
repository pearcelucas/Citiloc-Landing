import { Whats } from "../components/BotaoWhatsapp"
import { Mapa } from "../components/Mapa"
import { NavRodape } from "../components/NavRodape"
import { ContatosMapa, Email, FaleConosco, ImgContatos, LinkContatos, MapContainer, Secao, Subtitulo, Telefone, TextoContatos, Titulo, WhatsAppContatos } from "./styles"
import telefone from "../images/telefoneAzul.png"
import email from "../images/gmail.png"
import instagram from "../images/instagram.png"
import { Link } from "react-router-dom"
export const Contatos = () => {
    return (
        <>
            <Secao>Contatos</Secao>
            <ContatosMapa>
                <FaleConosco>
                    <Subtitulo>Fale conosco:</Subtitulo>
                    <Telefone>
                        <ImgContatos src={telefone} />
                        <TextoContatos> (85) 9999-9999</TextoContatos>
                        <Link to="https://wa.me/5585989439495">Abrir whatsapp</Link>
                    </Telefone>
                    <Email>
                        <ImgContatos src={email} />
                        <TextoContatos> citiloc@email.com.br</TextoContatos>
                    </Email>
                    <Telefone>
                        <ImgContatos src={instagram} />
                        <LinkContatos to="https://www.instagram.com/citiloc"> @CitiLoc</LinkContatos>
                    </Telefone>
                </FaleConosco>
                <MapContainer>
                <Mapa />
                </MapContainer>
            </ContatosMapa>
            <Whats />
            <NavRodape />
        </>
    )
}