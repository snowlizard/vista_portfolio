import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bootState } from "../redux/actions/bootStateAction";
import boot from '../assets/bootloader_pre.gif';
import boot2nd  from '../assets/bootloader_2nd.mp4';
import vista_logon_logo from '../assets/vista_logon_logo.png';
import loadingCircle from '../assets/loading_circle.png';


// simulate boot sequence using two timeouts
// and switch component after each timeout
// on final boot sequence dispatch action and 
// set bootState to true - booting is done -

export const Bootloader = () => {
    const [bootOrder, setBoot] = useState('pre');
    const dispatch = useDispatch();

    useEffect( () => {
        const timeout = setTimeout( () => {
            setBoot('boot2nd');
        }, 4000);

        const timeout2 = setTimeout( () => {
            clearTimeout(timeout);
            setBoot('bootFinal');
        }, 8000);

        return () => clearTimeout(timeout2);
    }, []);

    return (
        <div className="bootloader_container">
            {
                bootOrder === 'pre' ? <img id="bootloader_pre" src={boot}></img>
                : bootOrder === 'boot2nd' ? 
                <video id="bootloader_2nd" width={400} height={400} autoPlay muted>
                    <source src={boot2nd} type="video/mp4"></source>
                </video>
                : <div id="bootloader_final">
                    <div className="bootWelcome">
                        <img id="loadingCircle" src={loadingCircle}
                        onAnimationEnd={ () => dispatch(bootState(true))}></img>
                        <span id="boot_text" >Welcome</span>
                    </div>
                    <img id="bootlogo_bottom" src={vista_logon_logo}></img>
                  </div>
            }
        </div>
    );
}

