import React, { useEffect, useState } from 'react';

const BookingUsedAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [adminIsLoading, setAdminIsLoading]= useState(true)
    
    useEffect( () =>{
        if(email){
            fetch(`http://localhost:5000/bookingUsers/admin/${email}`)
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

export default BookingUsedAdmin;