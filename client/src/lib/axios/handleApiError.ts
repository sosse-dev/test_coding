import axios from "axios"

export function handleApiError(error: unknown): string {
    if(axios.isAxiosError(error)) {
        return error.response?.data.error || "Something went wrong"
    }

    return "Unexpected error occured"
}