import * as React from 'react';

// place list size 145x464


export const StartMenu = () => {
    return (
        <div className='startMenu'>
            <div className='programList'>
                <div className='programs'></div>
                <div className='searchBar'>
                    <input id='search__bar' type='text'
                    placeholder='Start Search'></input>
                </div>
            </div>
            <div className='placelist'></div>
        </div>
    );
}