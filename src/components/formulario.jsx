import { BoataoEnvia, Campo, CampoPergunta, CampoResposta, CampoTexto, CardFormulario, DivFormulário, FormularioContainer, ParceirosContainer } from "../pages/styles"


export const Formulario = () => {
    return (

        <FormularioContainer>
            <CardFormulario>
                <DivFormulário action="https://formsubmit.co/lucaspearce@hotmail.com" method="POST">
                    <Campo>
                        <CampoPergunta for="name">Nome:</CampoPergunta>
                        <CampoResposta type="text" name="name" id="name" required />
                    </Campo>
                    <Campo>
                    <CampoPergunta for="telefone">Telefone:</CampoPergunta>
                    <CampoResposta type="tel" id="telefone" name="telCampoResposta" placeholder="(xx) xxxxx-xxxx" required/>
                    </Campo>
                    <Campo>
                        <CampoPergunta for="email">E-mail:</CampoPergunta>
                        <CampoResposta type="email" name="email" id="email" required />
                    </Campo>
                    <Campo>
                        <CampoPergunta for="message">Mensagem:</CampoPergunta>
                        <CampoTexto name="message" id="message" rows={5} required></CampoTexto>
                    </Campo>
                    <CampoResposta type="hidden" name="_captcha" value="false"  />
                    {/* <input
        type="hidden"
        name="_next"
        value="https://yourdomain.co/thanks.html"
    /> */} 
                    <Campo>
                    <BoataoEnvia type="submit" name="submit">Enviar</BoataoEnvia>
                    </Campo>
                </DivFormulário>
            </CardFormulario>
        </FormularioContainer>




    )
}