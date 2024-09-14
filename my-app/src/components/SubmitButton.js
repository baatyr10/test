import React from 'react';

const SubmitButton = ({ label, color }) => {
    const buttonStyle = {
        backgroundColor: color || '#778899'
    };

    return (
        <button type="submit" className="submit-button" style={buttonStyle}>
            {label}
        </button>
    );
};

export default SubmitButton;
