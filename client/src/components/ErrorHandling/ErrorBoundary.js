import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './ErrorPage';

export default function ReactErrorBoundary(props) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, errorInfo) => {
        // log the error
        console.log('Error caught.');  
        console.error(error);  
        console.error(errorInfo);
      }}
      onReset={() => {
        // reloading the page to restore the initial state
        // of the current page
        console.log('Reloading the page.');
        window.location.reload();
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
}
