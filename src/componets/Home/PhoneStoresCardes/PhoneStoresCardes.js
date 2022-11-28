import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import PhoneStoreCard from '../PhoneStoreCard/PhoneStoreCard';

const PhoneStoresCardes = () => {

const { data: phoneStores =[] ,isLoading ,refetch }= useQuery({
    queryKey:['phoneStores'],
    queryFn: async () =>{
        const res = await fetch('https://assignment-12-server-lac.vercel.app/mobileCollection')
        const data = await res.json();
        return data;
    }
})
if(isLoading){
    return <Loading></Loading>
}

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols2 grid-cols-1 gap-6 mt-10'>
           {
            phoneStores.map(phoneStore => <PhoneStoreCard
            key={phoneStore._id}
            phoneStore={phoneStore}
            refetch={refetch}
            ></PhoneStoreCard> )
           }
        </div>
    );
};

export default PhoneStoresCardes;