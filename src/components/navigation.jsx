"use client"
import React from 'react';
import './navigation.css'
import { useState } from 'react';
import Select from 'react-select';


function Navigation(){
    const [isSearchable, setIsSearchable] = useState(true);

    return(
        <section className='navigation'>
            <h1 className='selected-category'>Categoría Seleccionada:</h1>
            <div className='search'>
                <Select
                    className='basic-single'
                    classNamePrefix='select'
                    defaultValue={"Seafood"}
                    isSearchable={isSearchable}
                />
            </div>
        </section>
    );
}

export default Navigation;