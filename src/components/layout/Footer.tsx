import { Link } from "react-router-dom";
import imgWhiteLogo from "../../assets/imgs/white_logo.png";

const Footer: React.FC = () => {
    return (
        <>
            <div className="w-full max-w-[1280px] text-center my-10 flex flex-col gap-6">
                <div className="flex flex-row justify-between gap-4">
                    <img src={imgWhiteLogo} />
                    <div className="flex flex-row gap-4">
                        <p>Acompanhe nas redes</p>
                        <Link to={""}>ln</Link>
                        <Link to={""}>ig</Link>
                    </div>
                </div>
                <div className="text-left border-t border-white/10 pt-6">
                    <p>+55 (27) 99781-9858</p>
                    <p>contato@directy.com.br</p>
                    <p>Mubadalla Office, Rua Inácio Higino, 673 - Vila Velha, ES, Brasil</p>
                </div>
                <div className="mt-10">
                    <p className="text-xs opacity-50">Copyright © 2024. Directy. Todos os direitos reservados.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
