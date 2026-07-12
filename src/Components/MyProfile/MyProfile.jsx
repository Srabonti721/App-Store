import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
    const { user } = use(AuthContext);
    return (

        <div className="hero bg-green-50 my-10">
            <Helmet>
                <title>AppStore || MyProfile</title>
            </Helmet>
            <div className="hero-content text-center">
                <div >
                    <img
                        src={user?.photoURL}
                        className="max-w-sm mx-auto rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-xl font-bold">{user.displayName}</h1>
                        <p className="py-6">
                            {user.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;