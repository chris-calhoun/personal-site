import React from 'react';
import Photo from '../assets/profile-pic-circular.png';

function ProfilePic() {
  return (
    <div className='item profile-pic'>
      <img src={Photo} alt='chris-profile' />
    </div>
  );
}

export default ProfilePic;
