import PageContent from './PageContent';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import classes from './Error.module.css'

function ErrorPage() {
  const error = useRouteError();
  let title = 'An error occurred!';
  let message = 'Something went wrong!';
  let image;

  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      message = error.error?.message || error.statusText;
    } else if (error.status === 404) {
      title = '';
      message = 'Could not find resource or page!';
      image = require('../images/404.jpg');
    }
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  } else {
    console.error(error);
    message = 'Unknown error';
  }

  return (
    <>
      <PageContent title={title}>
        <div className={classes.error}>
          <div className={classes.img}>
            <img src={image} alt="not found" loading="lazy" />
          </div>
          <p>{message}</p>
          <Link to='/' className={classes.back}>Back To Home</Link>
        </div>

      </PageContent>
    </>
  );
}

export default ErrorPage;