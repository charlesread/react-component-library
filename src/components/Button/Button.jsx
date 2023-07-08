import React, { useCallback } from "react";

export function Button({children}) {

    const onClick = useCallback(function(e) {
        alert('click!')
    }, [])

    return (
        <>
            <button onClick={onClick}>{ children }</button>
        </>
    )
}