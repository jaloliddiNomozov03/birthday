import React, {Component, Suspense} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Content } = Layout;
const Topbar = React.lazy(()=>import("../../components/Layout/Topbar"));
const  Home = React.lazy(() => import('./Home'));

class IndexRoot extends Component {

    constructor(props) {
        super(props);
        this.state={

        };
    }
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
        console.log(this.props);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        if(top > 80)
        {
            document.getElementById('topnav').classList.add('sticky-top');
        }
        else
        {
            document.getElementById('topnav').classList.remove('sticky-top');
        }
    };

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
                <Suspense fallback = {this.Loader()}>
                    <Topbar />
                    <Content style={{ padding: '0 50px', top: '50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        <Home />
                    </Content>
                </Suspense>
            </React.Fragment>
        );
    }
}

export default IndexRoot;