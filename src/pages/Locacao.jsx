import { Item, ItemDescricao, Subtitulo, Secao, TextoDescricao, SlideFoto, Container } from "./styles"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"
import { SliderSom } from "../components/SliderSom"
import { SliderEstrutura } from "../components/SliderEstrutura"
import { SliderImagem } from "../components/SliderImagem"
import { SliderNotebooks } from "../components/SliderNotebook"
import { SliderDisciplinadores } from "../components/SliderDisciplinadores"
import { SliderOutros } from "../components/SliderOutros"




export const Locacao = () => {
  return (
    <Container>
      <Secao>Locação</Secao>
      <Item>
        <SlideFoto>
          <SliderSom />
        </SlideFoto>
        <ItemDescricao>
          <Subtitulo>Sonorização</Subtitulo>
          <TextoDescricao>A Citiloc é especializada em sonorização para eventos sociais, shows, convenções, eventos corporativos.</TextoDescricao>
          <TextoDescricao>Todos os nossos caixas de som para locação são testados, instalados e retirados por profissionais altamente qualificados.</TextoDescricao>
          <TextoDescricao>Possuimos caixas amplificadoras, mesas de controle, microfones, retornos e muitos outros equipamentos fazem parte da lista que é essencial para que seu evento possua o máximo de qualidade de som.</TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderEstrutura />
          {/* <ImgItem src={fotoCardSom} alt="" /> */}
        </SlideFoto>
        {/* <ImgItem src={fotoportico} alt="" /> */}
        <ItemDescricao>
          <Subtitulo>Estruturas</Subtitulo>
          <TextoDescricao>Aluguel e montagem de estruturas metalicas de alumino para diversos formatos de projetos, portico, palcos, banners, backdrops, stands e para Fixação de Iluminação e paineis de LED.</TextoDescricao>
          <TextoDescricao>Contamos com uma diversidade de estruturas na linha Q15, Box Q20, Q25, Q30 e Q50 para grandes projetos e montagens de Shows.</TextoDescricao>
          <TextoDescricao>Palcos, pisos, coberturas e praticáveis com tamanhos variados de acordo com a sua necessidade excelente acabamento.</TextoDescricao>
          <TextoDescricao>Dispomos também de containers LBC (bombonas) de 1000 litros.</TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderImagem />
                 </SlideFoto>
        <ItemDescricao>
          <Subtitulo>Imagem</Subtitulo>
          <TextoDescricao>Contamos com painéis de LED, Tvs, projetores, etc </TextoDescricao>
          </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderNotebooks />
        </SlideFoto>
        <ItemDescricao>
          <Subtitulo>NOTEBOOKS</Subtitulo>
          <TextoDescricao>Seja uma demanda de curto ou longo prazo, a nossa solução de locação é indicada para empresas ou eventos.</TextoDescricao>
          <TextoDescricao>Dispomos de notebooks e periféricos novos, e com a configuração adequada para seu evento.</TextoDescricao>
          <TextoDescricao></TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderDisciplinadores />
        </SlideFoto>
        <ItemDescricao>
          <Subtitulo>Unifilas, disciplinadores e grades</Subtitulo>
          <TextoDescricao></TextoDescricao>
          <TextoDescricao></TextoDescricao>
          <TextoDescricao></TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderOutros/>
        </SlideFoto>
        <ItemDescricao>
          <Subtitulo>Outros</Subtitulo>
          <TextoDescricao>Gelágua, cadeiras, etc</TextoDescricao>
          <TextoDescricao></TextoDescricao>
          <TextoDescricao></TextoDescricao>
        </ItemDescricao>
      </Item>
      <Whats />
      <NavRodape />
    </Container>
  )
}