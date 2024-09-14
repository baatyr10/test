import React from 'react';

const InputField = ({ id, label, type, value, onChange, required, error, pattern }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}:</label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                className={`form-input ${error ? 'input-error' : ''}`}
                pattern={pattern} // Добавляем атрибут pattern
            />
            {error && <p className="error-text">{error}</p>}
        </div>
    );
};

export default InputField;
