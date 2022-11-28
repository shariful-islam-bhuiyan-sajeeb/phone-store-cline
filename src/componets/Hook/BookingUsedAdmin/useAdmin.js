import React, { useEffect, useState } from 'react';

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [adminIsLoading, setAdminIsLoading]= useState(true)
    
    useEffect( () =>{
        if(email){
            fetch(`https://assignment-12-server-lac.vercel.app/bookingUsers/admin/${email}`)
            .then( res => res.json())
            .then(data =>{
                console.log(data);
                setIsAdmin(data.isAdmin)
                setAdminIsLoading(false)
            })
        }
    },[email])
    return [isAdmin ,adminIsLoading]
};

export default useAdmin;