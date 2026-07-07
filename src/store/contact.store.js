import { create } from "zustand";
import { sendContactForm } from "@/service/contact.service";

export const useContactStore = create((set) => ({
    loading: false,
    success: false,
    error: null,

    submitForm: async (data) => {
        try {
            set({
                loading: true,
                error: null
            });
            await sendContactForm(data);
            set({
                loading: false,
                success: true
            });
        } catch (error) {
            set({
                loading: false,
                error: error
            });
        }
    },

    reset: () => set({
        loading: false,
        success: false,
        error: null
    })
}));