import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/principal/",
    element: (<App />)
  },
  {
    path: "/signin/",
    element: (<>
        <div>Comming soon...</div>
        <Link to='/principal/'><h4 color='red'>volver a principal</h4></Link>
      </>
    )
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
