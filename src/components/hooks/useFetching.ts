import { useState } from "react"

export default function useFetching(callback: () => any) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            if(error instanceof Error) {
            setError(error.message)
        }
        }
        finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}