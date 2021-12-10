import React, {Component, Suspense} from 'react';
import {withRouter} from "react-router-dom";

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Icons
import FeatherIcon from "feather-icons-react";

const CustomDot = () => {
    return (
        <i>
            <FeatherIcon icon="arrow-up" className="icons" />
        </i>
    );
};

const Topbar = React.lazy(()=>import("./Topbar"));

class Layout extends Component {
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
                <Suspense fallback={this.Loader()}>
                    <Topbar />
                    {this.props.children}

                    <ScrollUpButton
                        ContainerClassName="classForContainer"
                        style={{ height: 36, width: 36 }}
                        TransitionClassName="classForTransition"
                    >
                        <CustomDot />
                    </ScrollUpButton>
                </Suspense>
            </React.Fragment>
        );
    }
}

export default withRouter(Layout);