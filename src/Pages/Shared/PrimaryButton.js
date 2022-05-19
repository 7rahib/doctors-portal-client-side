import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({ children }) => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => { navigate('/appointment') }} className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;