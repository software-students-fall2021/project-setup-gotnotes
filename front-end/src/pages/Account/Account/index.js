import React, { useEffect, useState } from "react";

import axios from 'axios';

export const Account = ({ props }) => {

    const userID = "randpmEmail@email.com"

    //const [isEditActive, setIsEditActive] = useState(false);

    //const [userData, setUserData] = useState(null);

    useEffect(async () => {
        //post request with userID: userID to http://localhost/4000/account
        //const result = axios.blah blah

        //setUserData(result.data)
    }, [])

    return userData ? (

        <div>
            Account Page
            {
                isEditActive && (
                    <div className="random">



                    </div>
                )
            }
            {
                !isEditActive && (
                    <div className="random">

                    </div>
                )
            }
            {/*
            You might wanna have a look at the UserAvatar component that I wrote a while back
            skeleton of account page:
            <UserAvatar />
            <UserName />
            <UserLikes />
            */}
        </div >

    ) : ""
}