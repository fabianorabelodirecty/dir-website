import { toast } from "react-toastify";

export const showToast = <T,>(promise: Promise<T>, messages: { pending: string; success: string; error: string }) => {
    return toast.promise(
        promise,
        {
            pending: messages.pending,
            success: messages.success,
            error: messages.error,
        },
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }
    );
};
