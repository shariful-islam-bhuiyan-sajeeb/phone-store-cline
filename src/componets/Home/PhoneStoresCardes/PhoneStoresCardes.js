import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';

const PhoneStoresCardes = () => {

const { data: phoneStores =[] ,isLoading }= useQuery({
    queryKey:['phoneStores'],
    queryFn: async () =>{
        const res = await fetch('http://localhost:5000/mobileCollection')
        const data = await res.json();
        return data;
    }
})
if(isLoading){
    return <Loading></Loading>
}
    


    return (
        <div>
            <h2>phone Store data {phoneStores.length}</h2>
        </div>
    );
};

export default PhoneStoresCardes;