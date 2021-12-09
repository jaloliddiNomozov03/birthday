import React, {Component} from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";

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
                    child: [
                        { title: "Documentations", link: "/documentation" },
                        { title: "Changelog", link: "/changelog" },
                        { title: "Components", link: "/components" },
                        { title: "Widget", link: "/widget" },
                    ],
                },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky-top">
                    <Container>
                        <div>
                            <Link to="/" className = "logo">
                                <img src="" alt="logo" id="brandLogo" height="24" />
                            </Link>
                        </div>
                        <div className="buy-button">
                            <Link
                                to="/home"
                                target="_blank"
                                className="btn btn-pills btn-primary"
                            >
                                Buy Now
                            </Link>
                        </div>
                        <div
                            id="navigation"
                            style={{ display: "block" }}
                            // style={{ display: this.state.isOpen ? "block" : "none" }}
                        >
                            <ul className="navigation-menu" id="top-menu">
                                {this.state.navLinks.map((navLink, key)=>
                                    <li key={key}>
                                        <Link to={navLink.link}>{navLink.title}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </Container>
                </header>
            </React.Fragment>
        );
    }
}

export default Topbar;