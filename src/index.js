import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo/configuration';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('app')
);

registerServiceWorker();
