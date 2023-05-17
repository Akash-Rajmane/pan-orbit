import React from 'react';
import "./profile.css";
import useFetch from '../../hooks/useFetch/useFetch';

const Profile = () => {
  const {data, isLoading} = useFetch("https://panorbit.in/api/users.json")
  console.log(data);

  return (
    <div className='profile-container'>
      <div className="item1">
        <div className='sub-item'>
          <div className='user-img'>
          </div>
          <p className='username'>Username</p>
          <div className='user-details'>
            <span className='col1'>Username :</span><span className='col2'>abc</span>
            <span className='col1'>Email :</span><span className='col2'>abc@gmail.com</span>
            <span className='col1'>Phone :</span><span className='col2'>1234567891</span>
            <span className='col1'>Website :</span><span className='col2'>abc.com</span>
          </div>
          </div>
          <hr className='line'/>
          <div className="sub-item">
            <p className='title-text'>Company</p>
            <div className='company-details'>
              <span className='col1'>Name :</span><span className='col2'>abc</span>
              <span className='col1'>catchphrase :</span><span className='col2'>abc abcsd asnakd</span>
              <span className='col1'>bs :</span><span className='col2'>1234567891</span>
            </div>
          </div> 
       
      </div>
      <div className="item2">
        2
      </div>
     
    </div>
  )
}

export default Profile;