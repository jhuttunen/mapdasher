import React from 'react';

export default function ErrorPage(props) {
  return (
    <div className="h-screen bg-slate-300 flex items-center justify-center">
      <div className="p-3">
        <span className="text-xl text-center">
          Something went wrong
        </span>
        {props.resetErrorBoundary && (
          <div className="p-3 text-center">
            <button className="btn btn-light btd-light:hover" onClick={props.resetErrorBoundary}>
                🔄 Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}