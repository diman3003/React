import React from 'react'

function ErrorBoundary(props)
{
    const ErrorText = () => (
        <h2>
            Oops, something went wrong.
        </h2>
    )

    let isEverythingOK = true;

    return <>{isEverythingOK ? props.children : <ErrorText/>}</>
}

export default ErrorBoundary