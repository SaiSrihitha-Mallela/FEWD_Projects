import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Program7 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_6mpbenu',     // Replace with EmailJS service ID
            'template_5m0ik2f',    // Replace with EmailJS template ID
            formData,
            'hfDaPi2RBOX7ZiZkk'         // Replace with EmailJS public key
        ).then((result) => {
            alert("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            alert("Failed to send message.");
            console.log(error.text);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto shadow rounded bg-white">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <input name="name" value={formData.name} onChange={handleChange} required
                placeholder="Name" className="w-full p-2 mb-2 border rounded" />
                <br/>
            <input name="email" value={formData.email} onChange={handleChange} required
                type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" />
            <br />

            <textarea name="message" value={formData.message} onChange={handleChange} required
                placeholder="Your message" className="w-full p-2 mb-2 border rounded" />
            <br />

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
    );
};

export default Program7;
