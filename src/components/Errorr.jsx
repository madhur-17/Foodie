import { useRouteError } from "react-router-dom";

const Error=()=>{
const err=useRouteError();
    return(
        <h1>OOPS!!!! {err.status+":"+err.statusText}</h1>
    )
}
export default Error;