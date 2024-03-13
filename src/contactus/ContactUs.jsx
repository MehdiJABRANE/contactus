import React from 'react';
import './ContactUs.css'


export default function ContactUs(){
    return(
        <>
            <div className='div-contact-us-container'>
                <div className='left-child'>
                    <div className='left-child-children'>
                        <h2>Contactez-nous</h2>
                        <div className='input-container'>
                            <label htmlFor="FullName">Nom complet</label>
                            <input type="text" id='FullName' name='FullName' placeholder='entrez votre nom'/>
                        </div>
                        <div className='input-container'>
                            <label htmlFor="Email">Email</label>
                            <input type="text" id='Email' name='Email' placeholder='votre.email@email.com'/>
                        </div>
                        <div className='input-container'>
                            <label htmlFor="Question">Question</label>
                            <textarea name="Question" id="Question" rows="4" placeholder='Entrer votre question ici'></textarea>
                        </div>
                        <div className='button-container'>
                            <button className='soumettre-btn'>soumettre</button>
                        </div>
                    </div>
                </div>
                <div className='right-child'></div>
            </div>
        </>
    )
}