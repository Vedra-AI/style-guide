import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Anemoi from 'Anemoi'

// const conor = new Anemoi('http://loping-arachnid-ullr.development.svc.cluster.local:8080/view','AIzaSyDuMXo9dsPVDt7_O3iu09XGuUS6_UbNixU', 'a67e45b2b89744a083f8f38ab88e3474')
//
// conor.air_init()
//
// export default conor

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
