
import { ContatosEndereco, Divisoria, Email, Endereco, EnderecoTexto, ImgLogo, ImgRodape, ItemLista2, LinkRodape, Lista2, MenuRapido, Rodape, Sobre, Telefone, TituloRodape } from "../pages/styles"
import logo from "../images/Logo.png"
import telefone from "../images/Icones/whatsapp-icon.png"
import email from "../images/Icones/mail.png"


export const NavRodape = () => {
    return (

        <Rodape>
            <Sobre>
                <ImgLogo src={logo} />
                <p>A CITILOC é uma empresa especializada em LOCAÇÃO e MONTAGEM de estruturas para eventos, sonorização, notebooks, projetores,
                    grades divisórias e painéis de led. Atendendo suas necessidades em eventos como festas, desfiles, feiras, stands para exposições,
                    congressos e muito mais.</p>
                <Divisoria />
                <p>Razão Social: Citiloc lorem ipsum</p>
                <p>CNPJ: 123.456.0001/01</p>
            </Sobre>
            {/* <MenuRapido>
                <TituloRodape>Menu Rápido</TituloRodape>
                <Divisoria />
                <Lista2>
                    <li>
                        <ItemLista2 to="/">Home</ItemLista2>
                    </li>

                    <li>
                        <ItemLista2 to="/Locacao">Locação</ItemLista2>
                    </li>

                    <li>
                        <ItemLista2 to="/eventos">Eventos</ItemLista2>
                    </li>
                    <li>
                        <ItemLista2 to="/contatos">Contatos</ItemLista2>
                    </li>

                </Lista2>
            </MenuRapido> */}
            <ContatosEndereco>
                <TituloRodape>Contatos e endereço</TituloRodape>
                <Divisoria />
                <Endereco>
                    {/* <ImgRodape src={endereco} /> */}
                    <p>Rua Lorem Ipsum, 1234</p>
                </Endereco>
                <EnderecoTexto>Fortaleza/CE</EnderecoTexto>
                <EnderecoTexto>Cep: 60123-456</EnderecoTexto>
                <LinkRodape to="https://maps.app.goo.gl/xLcgvBs6z8nvh8y78">Ver no mapa</LinkRodape>
                <Telefone>
                    <ImgRodape src={telefone} />
                    <p>(85) 9999-9999</p>
                </Telefone>
                <LinkRodape to="https://wa.me/5585989439495">abrir whatsapp</LinkRodape>
                <Email>
                    <ImgRodape src={email} />
                    <EnderecoTexto>citiloc@email.com.br</EnderecoTexto>
                </Email>
            </ContatosEndereco>
        </Rodape>
    )
}