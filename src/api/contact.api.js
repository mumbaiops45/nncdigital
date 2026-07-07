import api from "./axioInstance";

const CONTACT_URL = "https://formsubmit.co/ajax/info@nakshatranamahacreations.com";

export const sendContactFormApi = async (data) => {
    const response = await api.post(
        CONTACT_URL,
        data
    );
    return response.data;
};