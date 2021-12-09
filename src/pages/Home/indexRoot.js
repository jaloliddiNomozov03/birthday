import React, {Component} from 'react';

const  Home = React.lazy(() => import('./Home'));
class IndexRoot extends Component {
    render() {
        return (
            <React.Fragment>
                <Home />
            </React.Fragment>
        );
    }
}

export default IndexRoot;