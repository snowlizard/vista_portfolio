import * as React from 'react';
import { Window } from '../subcomponents/window';

export const Quizico = () => {
    return (
        <Window
        title='Quizico'
        content={
            <iframe src='https://quizico.herokuapp.com/'/> }
        />
    );
}