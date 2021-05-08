import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <div className="dark-discord">
                <div className="footer-flex-wrapper">
                    <h2 className="footer-title">Coding Helper</h2>
                    <div className="footer-grid-wrapper">
                        <h3 className="bold">Important</h3>
                        <h3 className="bold">Others</h3>
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                        <a href="https://blog.naver.com/huntingbear21" className="footer-link">Blog</a>
                        <Link to="/docs" className="footer-link">Docs</Link>
                        <a href="https://huntingbear21.me/" className="footer-link">Website</a>
                    </div>
                </div>
                <div className="footer">
                    <h3>Copyright © Huntingbear21. All rights reserved.</h3>
                </div>
            </div>
        )
    }
}

export default Footer;
