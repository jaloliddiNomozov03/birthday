import React, {Component} from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import "./topbar.css";

const { Header, Content, Footer } = Layout;

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
                    title: "Docs",
                    link: "/home",
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
                        <div>
                            <Link to="/" className = "logo">
                                <img src="" alt="logo" id="brandLogo" height="24" />
                            </Link>
                        </div>
                        <Menu
                            theme="" mode="horizontal"
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