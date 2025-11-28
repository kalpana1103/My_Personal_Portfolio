import React from "react";
import profile from "../assets/profile.jpg";  // <-- IMPORT HERE

const ProfilePic = () => {
  return (
    <div >
     
      <img 
        src={profile} 
        alt="Profile Photo" 
        className=" w-80 h-80object-cover rounded-full shadow-lg"
      />
    </div>
  );
};

export default ProfilePic;
