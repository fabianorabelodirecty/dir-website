import axios from "axios";
import { ContactReq, WorkWithUsReq } from "../utils/types/reqs/ContactFormData";
import { showToast } from "../utils/functions/toastHandler";
import { toBase64 } from "../utils/functions/toBase64";

// const backendLink = "http://localhost:3000";
const backendLink = "https://newdirectyback.directy.com.br";

const axiosInstance = axios.create({
    baseURL: backendLink,
    headers: {
        "Content-Type": "application/json",
    },
});

class Requests {
    static async sendContact(formData: ContactReq) {
        return showToast(axiosInstance.post("/contato", { ...formData }), {
            pending: "Enviando mensagem...",
            success: "Mensagem enviada com sucesso!",
            error: "Erro ao enviar mensagem.",
        }).then((response) => response.data);
    }

    static async sendWorkWithUs(formData: WorkWithUsReq) {
        return showToast(
            axiosInstance.post("/trabalheConosco", {
                ...formData,
                curriculo: formData.curriculo ? await toBase64(formData.curriculo) : undefined,
            }),
            {
                pending: "Enviando candidatura...",
                success: "Candidatura enviada com sucesso!",
                error: "Erro ao enviar candidatura.",
            }
        ).then((response) => response.data);
    }
}

export default Requests;
