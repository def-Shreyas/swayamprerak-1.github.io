'use client'
import React, { useState, useEffect } from 'react';
import Nav from '@/components/Navbar/page'
import Footer from '@/components/Footer/page'
import './laptop.css'; // Importing the CSS file

const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')
    const [warning, setWarning] = useState('')
    const [emailWarning, setEmailWarning] = useState('')

    function send(e) {
        e.preventDefault(); // Prevents the default form submission behavior

        if (email.trim() === '' && textarea.trim() == '') {
            setEmailWarning("Please fill the email")
            setWarning("Message cannot be empty")
        }
        else if (email.trim() === '') {
            setEmailWarning("Please fill the email")
        }
        else if (textarea.trim() === '') {
            setWarning("Message cannot be empty")
        }
        else {
            const mailtoLink = `mailto:swayamprerak12122@gmail.com?subject=Collaboration&body=${encodeURIComponent(textarea)}`;
            window.location.href = mailtoLink;
        }

        setEmail('')
        setTextarea('')
    }

    useEffect(() => {
        // Update the document title
        document.title = "Collaborate";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Let's collaborate to make changes in the society with the youth."
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Let's collaborate to make changes in the society with the youth.";
            document.head.appendChild(newMeta);
        }
    }, []);
    return (
        <>
            <Nav />
            <div className="form-container">
                <div className="form-box">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email ID</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" required />
                            <p className="warnings">{emailWarning}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message"
                                placeholder="please keep it short and simple" // Dynamic placeholder
                                maxLength={400}
                                value={textarea}
                                onChange={(e) => setTextarea(e.target.value)}>
                            </textarea>
                            <p className="warnings">{warning}</p>
                        </div>
                        <button type="submit" className="sign-in-button" onClick={send}>SEND</button>
                    </form>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default SignInForm;
