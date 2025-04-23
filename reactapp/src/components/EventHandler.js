import React, { useState } from 'react';

export default function EventHandler() {
    const [text, setText] = useState("Hello, click the button to update me!");

    const handleClick = () => {
        setText("🎉 The text has been updated!");
    };

    return (
        <div style={styles.container}>
            <p style={styles.text}>{text}</p>
            <button onClick={handleClick} style={styles.button}>
                Click Me
            </button>
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
    text: {
        fontSize: '20px',
        color: '#333',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
};
