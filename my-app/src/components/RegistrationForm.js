import React, { useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import CheckboxField from './CheckboxField';
import SubmitButton from './SubmitButton';
import Notification from './Notification'; // Импортируйте компонент уведомления

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState(null); 

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        const { firstName, lastName, email, phone, message, agree } = formData;

        if (!firstName) newErrors.firstName = 'Name is required';
        if (!lastName) newErrors.Company = 'Company is required';
        if (!email) newErrors.email = 'Email is required';
        if (!phone) newErrors.phone = 'Phone number is required';
        if (!message) newErrors.message = 'Message is required';
        if (!agree) newErrors.agree = 'Необходимо согласие с условиями';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); 
            return;
        }

        console.log('Form sent:', formData);
        setErrors({}); 
        setNotification('Form sent successfully!'); 
    };

    const handleCloseNotification = () => {
        setNotification(null); 
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputField
                    id="firstName"
                    label="Name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    error={errors.firstName}
                />
                <InputField
                    id="Company"
                    label="Company"
                    type="text"
                    value={formData.Company}
                    onChange={handleChange}
                    required
                    error={errors.Company}
                />
                <InputField
                    id="email"
                    label="E-mail"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                />
                <InputField
                    id="phone"
                    label="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="\+?[0-9\s\-\(\)]+"
                    error={errors.phone}
                />
                <InputField
                    id="subject"
                    label="Subject"
                    type="text"
                    value={formData.Subject}
                    onChange={handleChange}
                    required
                    error={errors.Subject}
                />
                <TextAreaField
                    id="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    error={errors.message}
                />
                <CheckboxField
                    id="agree"
                    label="  I accept Terms and Privacy Policy"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    error={errors.agree}
                />
                <SubmitButton label="Send" color="#404463" />
            </form>
            {notification && (
                <Notification
                    message={notification}
                    onClose={handleCloseNotification}
                />
            )}
        </>
    );
};

export default RegistrationForm;
