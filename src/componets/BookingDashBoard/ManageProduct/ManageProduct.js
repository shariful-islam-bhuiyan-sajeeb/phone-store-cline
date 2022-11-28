import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import Loading from '../../Loading/Loading';
import ManageProductCard from '../ManageProductCard/ManageProductCard';

const ManageProduct = () => {
    UseTitle('/manageProduct')
    

    const {data: manageProducts, refetch, isLoading}= useQuery({
        queryKey: ['manageProduct'],
        queryFn: async () =>{
            try{
                const res = await fetch('https://assignment-12-server-lac.vercel.app/manageProduct', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch(error){
            }
        }
    })




    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-xl font-semibold text-orange-600'>Manage Products {manageProducts?.length}</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    manageProducts.map(products => <ManageProductCard
                        key={products._id}
                        products={products}
                        refetch={refetch}
                    ></ManageProductCard>)
                }
            </div>
            
        </div>
    );
};

export default ManageProduct;