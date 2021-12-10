import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';


const { Header } = Layout;

class Topbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            navLinks: [
                {id: 1, title: "Home", link: "/home"},
                {
                    id: 2,
                    title: "Landing",
                    link: "/#",
                    isMegaMenu: true,
                    isOpenSubMenu: false,
                    child: [],
                },
                {
                    id: 3,
                    title: "Pages",
                    link: "/profile",
                    isOpenSubMenu: false,
                    child: [],
                },
                {
                    id: 4,
                    title: "Form",
                    link: "/form",
                    isOpenSubMenu: false,
                },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <Layout id="topnav" className="layout sticky-top">
                    <Header>
                        <Menu
                            theme="light"
                            mode="horizontal"
                        >
                            {
                                this.state.navLinks.map((navLink, key)=> {
                                return <Menu.Item key={key}>
                                    <Link to={navLink.link}>{navLink.title}</Link>
                                </Menu.Item>;
                                }
                            )}
                        </Menu>
                    </Header>
                </Layout>
            </React.Fragment>
        );
    }
}

export default Topbar;