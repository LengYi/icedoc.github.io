
import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import App from '/Users/ice/Downloads/react-native-paper-master/docs/node_modules/component-docs/dist/templates/App.js';
import data from './app.data';
import '/Users/ice/Downloads/react-native-paper-master/docs/node_modules/component-docs/dist/styles/reset.css';
import '/Users/ice/Downloads/react-native-paper-master/docs/node_modules/component-docs/dist/styles/globals.css';

import '/Users/ice/Downloads/react-native-paper-master/docs/assets/styles.css';

const root = document.getElementById('root');
const render = () => {
  try {
    ReactDOM.hydrate(
      <App
        name={window.__INITIAL_PATH__}
        data={data}
        github={"https://github.com/callstack/react-native-paper/edit/master/"}
        logo={"images/sidebar-logo.svg"}
        title={"[title] · React Native Paper"}
      />,
      root
    );
  } catch (e) {
    ReactDOM.render(
      <RedBox error={e} />,
      root
    );
  }
};

if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}

render();
