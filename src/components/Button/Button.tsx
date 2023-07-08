import React, { MouseEventHandler, useCallback } from "react";

export interface ButtonProps extends React.PropsWithChildren {
    onClick?: MouseEventHandler
}

export function Button({onClick, children}: ButtonProps) {

    const onClickHandler = onClick || useCallback(function (e: unknown) {
        console.log(e)
        alert('click!!')
    }, [])

    return (
        <>
            <button onClick={onClickHandler}>{children}</button>
        </>
    )
}