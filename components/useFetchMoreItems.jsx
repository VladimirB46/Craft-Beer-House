import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMoreItems = (url, perPage) => {

    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ allLoaded, setAllLoaded ] = useState(false);

    useEffect(() => {
        if (!allLoaded) {
            const oldData = data ? [...data] : [];
            setIsLoading(true);
            axios.get(url)
                .then((response) => {
                    const newData = [...oldData, ...response.data]
                    setData(newData);
                    if (response.data.length < perPage) setAllLoaded(true);
                })
                .catch(error => {
                    setError(error);
                })
                .then(() => {
                    setIsLoading(false);
                })
        }
    }, [url])

    return { data, isLoading, error, allLoaded }
}

export default useFetchMoreItems