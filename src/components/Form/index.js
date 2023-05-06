import React from 'react';

function form() {
    return (
        <div className='login'>
            <form className='form'>
                <input type='text' id='email' placeholder='Adresse e-mail ou numéro de tél.'></input>
                <input type='text' id='password' placeholder='Mot de passe'></input>
                <button className='submit-btn'>
                    Se connecter
                </button>
            </form>
            <div className='forgot-pwd'>
                <a href='.'>Mot de passe oublié ?</a>
            </div>
            <button className='create-acc'>Créer un nouveau compte</button>
        </div>
    );
}

export default form;