import React, { useState } from 'react';

export default function EventOnMouse() {
    const [message, setMessage] = useState('');

    const handleMouseEnter = () => {
        setMessage('👋 You hovered over the box!');
    };

    const handleMouseLeave = () => {
        setMessage('');
    };

    return (
        <div style={styles.container}>
            <div
                style={styles.box}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Hover over me!
            </div>
            <p style={styles.message}>{message}</p>
        </div>
    );
}

const styles = {
    container: {
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    box: {
        width: '200px',
        height: '100px',
        backgroundColor: '#f0ad4e',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        color: 'white',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    message: {
        fontSize: '20px',
        color: '#333',
        minHeight: '24px', // keeps height stable
    },
};
