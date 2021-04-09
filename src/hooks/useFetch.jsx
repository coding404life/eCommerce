import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    //fetch some data
    useEffect(() => {
        let isRendered = false;
        axios.get(url)
            .then(res => {
                if (!isRendered) {
                    setData(res.data);
                    setIsLoading(false);
                    setError(null)
                    console.log(res.data);
                }
            }).catch(err => {
                setIsLoading(false);
                setError(err.message)
            })
        return () => {
            isRendered = true;
        }
    }, [ url ]);

    return { data, isLoading, error }
}

export default useFetch;