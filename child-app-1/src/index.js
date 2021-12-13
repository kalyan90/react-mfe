import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderApp2 = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountApp2 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('App2-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}