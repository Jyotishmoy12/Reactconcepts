import React from 'react'

const user={
  name:"Hedy",
  imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize:90,
};
const profile=()=>{
  return(
   <>
   <h1>{user.name}</h1>
   <img className="avatar" 
   src={user.imageUrl} 
   alt={'photo of'+user.name}
   style={{
    // width: user.imageSize,
    // height: user.imageSize
   }}
   />
   </>
  )
} 
export default profile;
