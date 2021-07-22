import { useEffect, useRef, useState } from 'react'

export const UseFetch = (url) => {
    const ismounted = useRef(true)
    const [stateFetch, setStateFetch] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            ismounted.current = false
        }
    }, [])

    useEffect(() => {

        setStateFetch({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if (ismounted.current) {
                        setStateFetch({
                            data,
                            loading: false,
                            error: null
                        })
                    } else {
                        console.log('No se llamo al state fetch')
                    }
                }, 1000);
            })
    }, [url])

    return stateFetch
}
