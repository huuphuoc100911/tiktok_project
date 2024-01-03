import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    console.log(12332);
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
