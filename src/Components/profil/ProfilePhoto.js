import React from 'react'
import Photo from '../../Photo.jpg'


export const ProfilePhoto = () => {
  return (
    <div style={{border:"solid 10px black" ,Width:"500px",height:"800px" ,textAlign:"center"   }}>
   
    <img  width="320" height="240" src={Photo} />
    <img  width="320" height="240"src='./x.png' />
  </div>
  );
};

export default ProfilePhoto;