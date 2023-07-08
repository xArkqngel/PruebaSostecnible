"use client"
import React from 'react';
import './navigation.css'

function Navigation(){
    return(
        <section className='navigation'>
            <h1 className='selected-category'>Categoría Seleccionada:</h1>
            <div className='search'>
                <input type='text' placeholder='Search meals'></input>
                <button className='search-button'>Search</button>
            </div>
        </section>
    );
}

export default Navigation;