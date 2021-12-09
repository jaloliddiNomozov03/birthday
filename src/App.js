import React, {Component, Suspense} from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router,
    withRouter,
} from "react-router-dom";

import routes from "./routes";

function withLayout(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {
        render() {
            return (
                <>
                    <WrappedComponent/>
                </>
            );
        }
    };
}

class App extends Component {
    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"/>
                        <div className="double-bounce2"/>
                    </div>
                </div>
            </div>
        );
    };
    render() {
        return (
            <React.Fragment>
              <Router>
                <Suspense fallback={this.Loader()}>
                    <Switch>
                        {routes.map((route, idx) =>
                            route.isWithoutLayout ? (
                                <Route
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                    key={idx}
                                />
                            ) : (
                                <Route
                                    path={route.path}
                                    exact
                                    component={withLayout(route.component)}
                                    key={idx}
                                />
                            )
                        )}
                    </Switch>
                </Suspense>
              </Router>
            </React.Fragment>
        );
    }
}

export default withRouter(App);