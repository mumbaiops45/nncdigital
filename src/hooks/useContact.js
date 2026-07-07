import { useContactStore } from "@/store/contact.store";

const useContact = () => {
    const {loading, success, error, submitForm, reset} = useContactStore();

    return {
        loading, success, error, submitForm, reset
    };
};


export default useContact;