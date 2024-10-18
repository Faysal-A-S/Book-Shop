import { useEffect, useState } from 'react'

export const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const data = setTimeout(() => {
            setDebouncedValue(value)
            localStorage.setItem("search", value)
        }, delay)
        return () => {
            clearTimeout(data)
        }
    }, [value, delay])
    return debouncedValue
}

