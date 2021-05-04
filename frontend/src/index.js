﻿import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import axios from './axios/axios';

axios.interceptors.request.use((request)=>{
request.headers = {
    'x-auth-token': localStorage.getItem('SavedToken')
}


return request
})

ReactDOM.render(
    <BrowserRouter>
     <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);

/**  
 * Be aware that the website will only update to the latest version on the 2nd page visit if it as already cached 
 * Learn more about service workers in React: https://create-react-app.dev/docs/making-a-progressive-web-app
 */
registerServiceWorker();
