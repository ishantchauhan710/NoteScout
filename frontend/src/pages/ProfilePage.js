import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {

  const userInfoFromStorage = localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")): null;
  const history = useHistory();

  if(userInfoFromStorage===null) {
    history.push('/');
    return(<></>);
  } else {

  return (
    <div className='container-profile-page'>

    <img className='img-profile-picture' src={userInfoFromStorage.userProfilePicture} />
    <table className='table-profile-data'>
    <tr>
            <td>Username</td>
            <td>{userInfoFromStorage.userName}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>{userInfoFromStorage.userEmail}</td>
        </tr>
        <tr>
            <td>Account Status</td>
            <td>{userInfoFromStorage?("Working"):("Error")}</td>
        </tr>
        
     
    </table>

    </div>
  )
  }


}

export default ProfilePage