import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetailsCard from '../CategoryDetailsCard/CategoryDetailsCard';

const CategoryDetails = () => {
    const categories = useLoaderData();
    console.log(categories);


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
            {
                categories.map(category => <CategoryDetailsCard
                key={category._id}
                category={category}
                ></CategoryDetailsCard> )
            }
        </div>
    );
};

export default CategoryDetails;