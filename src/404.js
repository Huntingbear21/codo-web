import React from 'react';
import Layout from './components/Layout';


export default class NotFound extends React.Component {
    render() {
        return (
            <Layout>
                <div className="not-found-text">
                    <p className="titletext">404 Not Found</p>
                    <p className="titletext small-info">Page not found.</p>
                </div>
            </Layout>
        )
    }
}
