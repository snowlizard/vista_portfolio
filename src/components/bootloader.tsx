import * as React from "react";
import { useState, useEffect } from "react";
import boot from '../assets/bootloader_pre.gif';
import boot2nd  from '../assets/bootloader_2nd.mp4';

export const Bootloader = () => {
    const [bootOrder, setBoot] = useState('pre');

    useEffect( () => {
        const timeout = setTimeout( () => {
            setBoot('boot2nd');
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="bootloader_container">
            {
                bootOrder === 'pre' ? <img id="bootloader_pre" src={boot}></img>
                : <video id="bootloader_2nd" width={400} height={400} autoPlay muted>
                    <source src={boot2nd} type="video/mp4"></source>
                  </video>
            }
        </div>
    );
}

