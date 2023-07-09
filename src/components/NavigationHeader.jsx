"use client"
import React from 'react';
import './NavigationHeader.css'
import Search from './Search';


function NavigationHeader({category}){

    return(
        <div className='navigation'>
            <div className='search-header'>
                <h1 className='selected-category'>Categoría Seleccionada: {String(category).replaceAll('_',' ')}</h1>
                <Search/>
            </div>
            <h3 className='meal-list-text'>Lista de comidas</h3>
        </div>
    );
}

export default NavigationHeader;