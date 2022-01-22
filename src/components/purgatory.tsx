import * as React from "react";
import { Bootloader } from "./bootloader";
import { Desktop } from "./desktop";
import { RootStateOrAny, useSelector } from "react-redux";


export const Purgatory = () => {
    const bootFinished = useSelector( (state: RootStateOrAny) => state.boot);

    return (
        !bootFinished 
        ? <Bootloader />
        : <Desktop />
    );
}