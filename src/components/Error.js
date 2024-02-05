import { useRouteError } from 'react-router-dom'

function Error(){
    const err = useRouteError()
return(
    <div>
        <h1>Oops!</h1>
        <p>Something went wrong</p>
        <p>
        <i>{err.status} : {err.statusText || err.message}</i>
        </p>
    </div>
)}

export default Error;