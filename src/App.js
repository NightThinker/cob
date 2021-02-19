// import logo from './logo.svg';
import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './shared/theme/NavBar/NavBar'
import Footer from './shared/theme/Footer/Footer'

import { routes } from './shared/routes/routes'
import './shared/styles/tailwind.css'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <Navbar />
        <Switch>
          {routes.map((route, i) => (
            <Route exact key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
      <Footer>Copyright © 2021 ChomCHOB. All Rights Reserved.</Footer>
    </Router>
  );
}

export default App;
