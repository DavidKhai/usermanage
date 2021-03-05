import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <Footer className="container-fluid bg-secondary">
                <div className="row">
                    <div className="col-12 m-3 text-white">
                        <p><i className="fa fa-copyright" aria-hidden="true"></i> Copyright David Khải</p>
                    </div>
                </div>
            </Footer>
        );
    }
}

export default Footer;