import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import sidebarReducer from './reducers/sidebar-reducer';

const allReducers = combineReducers({
  sidebar: sidebarReducer
})

const store = createStore(
  allReducers,
  {sidebar: {link: "Home"}},
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


// import Anemoi from 'Anemoi'

// const conor = new Anemoi('http://loping-arachnid-ullr.development.svc.cluster.local:8080/view','AIzaSyDuMXo9dsPVDt7_O3iu09XGuUS6_UbNixU', 'a67e45b2b89744a083f8f38ab88e3474')
//
// conor.air_init()
//
// export default conor
