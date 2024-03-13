import React from 'react';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'; 
import './ContactUsHeader.css';

export default function ContactUsHeader(){
    return(
        <>
            <div className='contact-us-header-container'>
                <h1>Contactez-nous</h1>
                <div className='informations-container'>
                    <span className='location-span'><i class="bi bi-geo-alt"></i>Alaska, United States</span>
                    <span className='location-span'><i class="bi bi-send"></i>chamerycoworking@email.com</span>
                    <span className='location-span'><i class="bi bi-telephone"></i>(205) 387-2122</span>
                </div>
            </div>
        </>
    )
}