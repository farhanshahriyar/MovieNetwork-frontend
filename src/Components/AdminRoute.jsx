
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Auth';
import axios from 'axios';
import Loading from './Loading';
import ErrorScreen from '../screens/ErrorScreen';

function AdminRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const { user: currentUser } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!currentUser) {
            return;
        }

        axios.get(`https://backend-eight-omega.vercel.app/api/checkuser/${currentUser.email}`)
            .then(res => {
                console.log(res.data);
                if (res.data.verified) {
                    setVerified(true);
                    setLoading(false);
                } else {
                    setVerified(false);
                    setLoading(false);
                }
            });
    }, [currentUser]);
    // console.log(currentUser)

    if (loading) {
        return <Loading />;
    }
    // else if (error) {
    //     return <ErrorScreen error={error} />
    // }

    if (verified) {
        return children;
    }

    return <ErrorScreen error={error} />;




}

export default AdminRoute;