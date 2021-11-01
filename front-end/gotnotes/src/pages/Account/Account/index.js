import React from 'react'

export const Account = () => {
    
    return (
        <div>
            <div>"Your Account"</div>
            <p>Account</p>
            <nav>
                <Link to= "/">PictureGrid</Link>
                <Link to= "/changeProfilePicture">ChangeProfilePicture</Link>
                <Link to= "/upload">Upload</Link>
                <Link to= "/notifications">Notifications</Link>
                <Link to= "/settings">Settings</Link>
                <Link to= "/deleteAccoutn">DeleteAccount</Link>
            </nav>
        </div>

    )
}
