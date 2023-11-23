
import { CNPJ, ContatosEndereco, DivContato, DivEndereco, Divisoria, Email, Endereco, EnderecoTexto, ImgLogo, ImgRodape, ItemLista2, LinkRodape, Lista2, MenuRapido, Rodape, Sobre, Telefone, TituloRodape } from "../pages/styles"
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
                <CNPJ>Razão Social: Citiloc Serviços e Estruturas LTDA</CNPJ>
                <CNPJ>CNPJ: 52.199.046/0001-85</CNPJ>
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
               

                <EnderecoTexto>Rua Frei Mansueto, 721</EnderecoTexto>
                <EnderecoTexto>Fortaleza/CE</EnderecoTexto>
                <EnderecoTexto>Cep: 60175-157</EnderecoTexto>
                <LinkRodape to="https://maps.app.goo.gl/oBkK9U128mmgySFQA">Ver no mapa</LinkRodape>
            
              

                <Telefone>
                    <ImgRodape src={telefone} />
                    <p>(85) 9 8943-9495</p>
                </Telefone>
                <LinkRodape to="https://wa.me/5585989439495">abrir whatsapp</LinkRodape>
                <Email>
                    <ImgRodape src={email} />
                    <EnderecoTexto>claudia@citiloceventos.com.br</EnderecoTexto>
                </Email>
              
            </ContatosEndereco>
        </Rodape>
    )
}