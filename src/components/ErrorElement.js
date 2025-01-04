import { useRouteError } from "react-router";

const ErrorElement = () => {

    const err = useRouteError()
    console.log(err);

    return (
        <>
            <h1>Error</h1>
            <h3>{err.status} - {err.statusText}</h3>
        </>
    )
}

export default ErrorElement; 