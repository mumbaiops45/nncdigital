import { sendContactFormApi } from "@/api/contact.api";

export const sendContactForm =  async (formData) => {
    try {
        const response = await sendContactFormApi(formData);

        return response;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};