import { useEffect } from 'react';

const UseTitle = (title) => {
   useEffect(() =>{
    document.title = `${title} - Phone Store`
   },[title])
};

export default UseTitle;