import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Warning from './Warning';


class Layout extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Warning text="⚠️ This website is under maintenance."/>
                    {this.props.children}
                <Footer />
            </>
        )
    }
}

export default Layout;
