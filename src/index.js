import {StrictMode} from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Test from "./Test";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

