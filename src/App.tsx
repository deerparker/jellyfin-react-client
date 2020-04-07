import React, { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";

import EntryScreen from "./screens/EntryScreen";
import NoMatch from "./components/NoMatch";
import ElectronRedirect from "./components/ElectronRedirect";
import { store, persistor } from "./utilities/storage/store";
import { Router, Switch, Route } from "./utilities/routing";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading";
//mport HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import ProtectedRoute from './components/ProtectedRoute';
import Conditional from "./components/Conditional";
import { getIsUserAuthenticated } from "./reducers/authCredentials";
import MainNavigation from "./navigation/MainNavigation";
//import SplashScreen from "react-native-splash-screen";

class App extends React.Component {
  
    render(): ReactNode {

        return (
          <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
              <Conditional fallback={<Loading />} condition={state => state.connectionStatus.apiInitialized}>
                <Router>
                  <Switch>
                    <Route exact path="/" component={EntryScreen} />
                    <ProtectedRoute
                      exact
                      validator={state => Boolean(state.connectionStatus.serverAddress)}
                      path="/login"
                      fallbackPath="/"
                      component={LoginComponent}
                    />
                    <ProtectedRoute
                      exact
                      validator={getIsUserAuthenticated}
                      path="/home"
                      fallbackPath="/"
                      //component={HomeComponent}
                      component={MainNavigation}
                    />
                    <Route exact path="/index.html" component={ElectronRedirect} />
                    <Route component={NoMatch} />
                  </Switch>
                </Router>
              </Conditional>
            </PersistGate>
          </Provider>
        );
    }
}

export default App;
