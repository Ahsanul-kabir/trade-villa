import React from 'react';
import welcomeImg from '../../../images/welcome.gif'

const HomeDashboard = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <img src={welcomeImg} alt="" className='w-50 h-50' />
        </div>
    );
};

export default HomeDashboard;