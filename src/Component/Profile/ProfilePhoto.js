import React from 'react'
import imageInSrc from "./imageInSrc.jpg"
const ProfilePhoto = () => {
    return (
        <div>
             <img  className ="imgs" src={imageInSrc}  alt ="Iphone" style={{width :"300px"}}/>
        </div>
    )
}

export default ProfilePhoto
