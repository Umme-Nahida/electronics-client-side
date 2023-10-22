
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='text-center mt-40'>
            <h1 className='text-4xl mb-4'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText || error.message}</p>
            <Link to ="/"><button className='btn mt-5'>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;