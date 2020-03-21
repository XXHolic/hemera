import ReactDOM from "react-dom";
import * as Sentry from '@sentry/browser';
import App from "./App";
import './css/normalize.css';
import './font/iconfont.css'
import './css/common.less';

Sentry.init({ dsn: 'https://1ea46c0309124094908fa0eb69e21afb@sentry.io/5169726' });
ReactDOM.render(App,document.getElementById("root"));
