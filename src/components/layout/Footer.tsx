import { Link } from "react-router-dom";
import imgWhiteLogo from "../../assets/imgs/white_logo.png";
import imgLogoIso from "../../assets/imgs/logo-iso.png";
import imgLogoProdfor from "../../assets/imgs/logo-prodfor.png";
import imgLogoInstagram from "../../assets/imgs/logo-ig.png";
import imgLogoLinkedin from "../../assets/imgs/logo-in.png";

const Footer: React.FC = () => {
    return (
        <>
            <div className="w-full max-w-[1280px] px-4 text-center my-10 flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <img src={imgWhiteLogo} className="max-w-[20svw]" />
                    <div className="flex flex-row gap-4 items-center">
                        <p>Acompanhe nas redes</p>
                        <Link
                            to={"https://www.instagram.com/directyconsulting/"}
                            target="_blank"
                            className="hover:opacity-50 transition-all"
                        >
                            <img src={imgLogoInstagram} className="size-6" />
                        </Link>
                        <Link
                            to={"https://www.linkedin.com/company/directy/"}
                            target="_blank"
                            className="hover:opacity-50 transition-all"
                        >
                            <img src={imgLogoLinkedin} className="size-6" />
                        </Link>
                    </div>
                </div>
                <div className="text-left border-t border-white/10 pt-6 flex flex-col lg:flex-row  justify-between gap-6">
                    <div>
                        <p>+55 (27) 99781-9858</p>
                        <p>contato@directy.com.br</p>
                        <p>Mubadalla Office, Rua Inácio Higino, 673 - Vila Velha, ES, Brasil</p>
                    </div>
                    <div className="flex flex-row max-h-[80%] gap-4 justify-end">
                        <img src={imgLogoIso} className="object-contain max-w-[20svw]" />
                        <img src={imgLogoProdfor} className="object-contain max-w-[20svw]" />
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-xs opacity-50">
                        Copyright © 2024. Directy. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
