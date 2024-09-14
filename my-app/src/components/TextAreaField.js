import React from 'react';

const TextAreaField = ({ id, label, value, onChange, required, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}:</label>
            <textarea
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                className={`form-textarea ${error ? 'textarea-error' : ''}`}
            />
            {error && <p className="error-text">{error}</p>}
        </div>
    );
};

export default TextAreaField;
