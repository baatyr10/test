import React, { useEffect } from 'react';
import './Notification.css'; // Не забудьте создать этот CSS файл для стилей уведомления

const Notification = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(); // Закрытие уведомления через 5 секунд
        }, 5000); // Выставьте время, через которое уведомление должно исчезнуть

        return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }, [onClose]);

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('notification-overlay')) {
            onClose(); // Закрытие уведомления при клике вне его
        }
    };

    return (
        <div className="notification-overlay" onClick={handleClickOutside}>
            <div className="notification">
                <p>{message}</p>
                <button className="notification-close" onClick={onClose}>×</button>
            </div>
        </div>
    );
};

export default Notification;
