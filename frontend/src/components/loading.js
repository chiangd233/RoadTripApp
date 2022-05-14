import React from 'react';

function Loading(Component) {
    return function LoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p>
                We are currently loading the data!
            </p>
        )
    };
}

export default Loading