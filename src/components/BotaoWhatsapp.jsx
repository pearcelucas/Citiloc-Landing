import { BotaoWhatsapp, Whatsapp } from "../pages/styles"
import whatsapp from "../images/whatsapp.png"



export const Whats = () => {
    return(
        <BotaoWhatsapp to="https://wa.me/5585989439495">
                <Whatsapp src={whatsapp} />
        </BotaoWhatsapp>
    )
}