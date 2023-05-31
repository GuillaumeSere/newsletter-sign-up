import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import list from './images/icon-list.svg';
import illustration1 from './images/illustration-sign-up-desktop.svg';
import illustration2 from './images/illustration-sign-up-mobile.svg';
import succes from './images/icon-success.svg';

// Style pour la modal
const modalStyles = {
    content: {
        width: '500px',
        height: '520px',
        margin: 'auto',
        padding: '20px',
        borderRadius: "30px",
        textAlign: 'center',
    },
};

function App() {

    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Veuillez saisir votre adresse e-mail.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Veuillez saisir une adresse e-mail valide.');
        } else {
            // Envoyer l'e-mail à votre serveur ou effectuer toute autre action requise

            setSuccessMessage(`A confirmation email has been sent to ${email}  Please open it and click the button inside to confirm your subscription`);
            setEmail('');
            setErrorMessage('');
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='container'>
            <div className="info">
                <div className="description">
                    <h1>Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <span> <img src={list} alt="list" />Product discovery and building what matters</span>
                    <span> <img src={list} alt="list" />Measuring to ensure updates are a success </span>
                    <span> <img src={list} alt="list" />And much more!</span>
                </div>
                <div className="formulaire">
                    <label htmlFor="email">Email address</label>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Votre adresse e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">Subscribe to monthly newsletter</button>
                    </form>
                </div>
            </div>
            <div className="illustration">
                <img className='illustration-desktop' src={illustration1} alt="illustration" />
                <img className='illustration-mobile' src={illustration2} alt="illustration" />
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Message de succès"
            >
                <div className="modal">
                    <img src={succes} alt="succes" />
                    <h2>Thanks for subscribing!</h2>
                    <p>{successMessage}</p>
                    <button onClick={closeModal}>Dismiss message</button>
                </div>
            </Modal>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default App;
