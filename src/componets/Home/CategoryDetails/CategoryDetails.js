import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetailsCard from '../CategoryDetailsCard/CategoryDetailsCard';

const CategoryDetails = () => {
    const categories = useLoaderData();
    console.log(categories);


    return (
        <div>
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