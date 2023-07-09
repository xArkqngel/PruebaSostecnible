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
        </div>
    );
}

export default NavigationHeader;