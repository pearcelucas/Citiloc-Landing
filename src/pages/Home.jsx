
import { Slide } from "../components/slider"
import { Card, CardNome, CardParceiro, Cards, Container, DescricaoCard, DivContato, ImagemCard, ImgCircle, ImgWhats, ParceirosContainer, TextoContato, TextoContato2, Titulo } from "./styles"
import fotoEstrtura from "../images/Estrutura/locacao-de-box-truss-em-ilha-comprida.jpg"
import fotoCardSom from "../images/Som/som,.webp"
import fotoCardLuz from "../images/movie.webp"
import fotoCardLED from "../images/LED.jpeg"
import fotoCardGrade from "../images/grade.webp"
import fotoCardUnifila from "../images/unifila.jpeg"
import fotoCardNotebook from "../images/notebook.jpg"
import fotoCardProjetor from "../images/projetor.jpeg"
import fotoCardTablet from "../images/tablet.jpg"
import fotoCardTV from "../images/tv.webp"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"
import fotoParceiro1 from "../images/Ceará_Sporting_Club_logo.svg.png"
import fotoParceiro2 from "../images/Fortaleza_Esporte_Clube_logo.svg.png"
import fotoParceiro3 from "../images/FERROVIÁRIO ATLÉTICO CLUBE.png"
import fotoParceiro4 from "../images/Brasão_da_UECE.png"
import fotoParceiro5 from "../images/comunidadedasnacoes.png"
import fotoParceiro6 from "../images/Sebrae.webp"
import fotoParceiro7 from "../images/SENAC-1.jpg"
import fotoParceiro8 from "../images/buteco.png"
import fotoParceiro9 from "../images/Samba.png"
import { Formulario } from "../components/formulario"
import whats from "../images/whatsapp.png"



export const Home = () => {
    return (
        <Container>
            <Slide />
            <Titulo>As melhores soluções pro seu evento você encontra aqui!!!</Titulo>
            <Cards>
                <Card>
                    <ImgCircle src={fotoCardSom} />
                    <CardNome>Sonorização</CardNome>
                </Card>
                <Card>
                    <ImgCircle src={fotoCardLuz} />
                    <CardNome>Iluminação</CardNome>
                </Card>
                <Card>
                    <ImgCircle src={fotoCardLED} />
                    <CardNome>LEDs</CardNome>
                </Card>

                <Card>
                    <ImgCircle src={fotoCardGrade} />
                    <CardNome>Grades</CardNome>
                </Card>
                <Card>
                    <ImgCircle src={fotoCardUnifila} />

                    <CardNome>Unifilas</CardNome>
                </Card>
                <Card>
                    <ImgCircle src={fotoEstrtura} />
                    <CardNome>Estrutura</CardNome>
                </Card>
                <Card>
                    <ImgCircle src={fotoCardNotebook} />
                    <CardNome>Notebooks</CardNome>
                </Card>
                <Card>
                    <ImgCircle src={fotoCardTV} />
                    <CardNome>TVs</CardNome>
                </Card>
                <Card>
                    <ImgCircle src={fotoCardProjetor} />
                    <CardNome>Projetores</CardNome>
                </Card>
                <Card>
                    <ImgCircle src={fotoCardTablet} />
                    <CardNome>Tablets</CardNome>
                </Card>
            </Cards>
            <Cards>
                <DivContato to="https://wa.me/5585989439495">
                    <ImgWhats src={whats}/>
                    <TextoContato>
                        <p>Entre em contato conosco pelo</p>
                        <TextoContato2>WhatsApp!</TextoContato2>
                    </TextoContato>
                </DivContato>
            </Cards>
            <Titulo>Conheça nossos parceiros:</Titulo>
            <ParceirosContainer>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro1} />
                    <DescricaoCard>Ceará Sporting Club</DescricaoCard>
                </CardParceiro>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro2} />
                    <DescricaoCard>Fortaleza Esporte Clube</DescricaoCard>
                </CardParceiro>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro3} />
                    <DescricaoCard>Ferroviário Atlético Clube</DescricaoCard>
                </CardParceiro>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro4} />
                    <DescricaoCard>Universidade Estadual do Ceará</DescricaoCard>
                </CardParceiro>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro5} />
                    <DescricaoCard>Comunidade das Nações</DescricaoCard>
                </CardParceiro>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro6} />
                    <DescricaoCard>Sebrae</DescricaoCard>
                </CardParceiro>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro7} />
                    <DescricaoCard>Senac</DescricaoCard>
                </CardParceiro>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro8} />
                    <DescricaoCard>Buteco Dona Maria</DescricaoCard>
                </CardParceiro>
                <CardParceiro>
                    <ImagemCard src={fotoParceiro9} />
                    <DescricaoCard>Samba do Vila</DescricaoCard>
                </CardParceiro>
            </ParceirosContainer>
            <Titulo>Entre em contato:</Titulo>
            <Formulario />
            <Whats />
            <NavRodape />
        </Container>
    )
}