import React from 'react';

const CheckboxField = ({ id, label, checked, onChange, required, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    name={id}
                    checked={checked}
                    onChange={onChange}
                    required={required}
                />
                {label}
            </label>
            {error && <p className="error-text">{error}</p>}
        </div>
    );
};

export default CheckboxField;
