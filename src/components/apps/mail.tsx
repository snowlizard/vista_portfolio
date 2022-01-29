import * as React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Window } from "../subcomponents/window";
import { TextField, Button } from "@mui/material";


export const Mail = () => {
    return (
        <Window title="Mail"
        content={<Contact />}
        idname="mailApp" />
    );
}

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_3096k8h','template_8by55tp',
        form.current, 'user_feunzaKiZLKsYfDwu2lHw').then(
            result => alert('Message Sent')
        ).catch( err => alert(err));

    }

    return (
        <form id="contact" ref={form} onSubmit={handleSubmit}>
            <div className="fromSubject">
                <TextField id="from" variant="outlined"
                fullWidth required type="email" name="from_name"
                placeholder="Your Email"></TextField>
            </div>
            <div className="fromSubject">
                <TextField id="subject" variant="outlined"
                fullWidth required type="text" name="subject"
                placeholder="Subject"></TextField>
            </div>
            <div id="bodyContainer">
                <TextField id="body" variant="outlined"
                multiline fullWidth type="text"
                rows={8} name="message"
                placeholder="Your Message" ></TextField>
            </div>
            <Button
            id="submitContact" variant="contained"
            type="submit">Submit</Button>
        </form>
    );
}