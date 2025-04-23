import React, { useState } from 'react';

export default function FocusAndBlur() {
    const [isFocused, setIsFocused] = useState(false);
    const [hoverText, setHoverText] = useState(false);
    const [hoverImage, setHoverImage] = useState(false);

    return (
        <div style={styles.container}>
            {/* Inline styles for the input field */}
            <input
                type="text"
                placeholder="Click to focus"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    ...styles.input,
                    borderColor: isFocused ? 'blue' : 'gray',
                    color: isFocused ? 'blue' : 'black',
                }}
            />

            {/* Hoverable Text */}
            <p
                onMouseEnter={() => setHoverText(true)}
                onMouseLeave={() => setHoverText(false)}
                style={{
                    ...styles.text,
                    filter: hoverText ? 'blur(4px)' : 'none',
                }}
            >
                Hover over this text to blur
            </p>

            {/* Hoverable Image */}
            <img
                src="https://via.placeholder.com/150"
                alt="Hover me"
                onMouseEnter={() => setHoverImage(true)}
                onMouseLeave={() => setHoverImage(false)}
                style={{
                    ...styles.image,
                    filter: hoverImage ? 'blur(4px)' : 'none',
                }}
            />
        </div>
    );
}

const styles = {
    container: {
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
    },
    input: {
        padding: '10px',
        fontSize: '18px',
        border: '2px solid gray',
        borderRadius: '5px',
        outline: 'none',
        transition: 'all 0.3s ease',
    },
    text: {
        fontSize: '24px',
        transition: 'filter 0.3s ease',
    },
    image: {
        width: '150px',
        height: '150px',
        transition: 'filter 0.3s ease',
    },
};
