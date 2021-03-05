import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <Header className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="jumbotron text-center">
                        <h1 className="display-3">QUẢN LÍ NGƯỜI DÙNG - VERSION 2</h1>
                        <p className="lead">Đây là trang quản lí thông tin người dùng</p>
                    </div>
                    </div>
                </div>
            </Header>

        );
    }
}

export default Header;