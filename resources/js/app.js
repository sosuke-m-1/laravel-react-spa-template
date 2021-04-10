window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import ReactDOM from 'react-dom';
import store from './stores/store'
import { Provider } from 'react-redux'
import App from './App/Page'
import Documents from './Documents/Page'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Template from './Template/Template';
import { Global, css } from "@emotion/react";

const global = css`*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role="list"],ol[role="list"]{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media(prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}}a{color:inherit;text-decoration:inherit}`

if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <Global styles={global} />
                <Template>
                    <Switch>
                        <Route path="/doc">
                            <Documents />
                        </Route>
                        <Route path="/">
                            <App />
                        </Route>
                    </Switch>
                </Template>
            </Provider>
        </Router>,
        document.getElementById('app')
    );
}
