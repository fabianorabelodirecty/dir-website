import axios from "axios";
import { ContactFormData } from "../utils/types/reqs/ContactFormData";
import { WorkWithUsFormData } from "../utils/types/reqs/WorkWithUsFormData";

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000", // Replace with your backend URL
    headers: {
        "Content-Type": "application/json",
    },
});

class Requests {
    static async sendContact(formData: ContactFormData) {
        try {
            const response = await axiosInstance.post("/contato", {
                ...formData,
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Error sending contact form.");
        }
    }

    static async sendWorkWithUs(formData: WorkWithUsFormData) {
        try {
            const response = await axiosInstance.post("/trabalheConosco", {
                ...formData,
                curriculo: formData.curriculo,
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Error sending work with us form.");
        }
    }
}

export default Requests;
