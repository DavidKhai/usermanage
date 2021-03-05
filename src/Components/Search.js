import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchText: ''
        }
    }
    openButton = () => {
        this.props.changeStatusButton();
    }
    closeButton = () => {
        this.props.changeStatusButton();
    }
    showButton = () => {
        if( this.props.statusButton === true){
            return(
                <button onClick={()=>this.openButton()} className="btn btn-success"><i className="fa fa-plus" /> Thêm người dùng</button>
            )
        }
        else{
            return (
                <button onClick={()=>this.closeButton()} className="btn btn-secondary"><i className="fa fa-remove" /> Đóng lại</button>
            )
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value =event.target.value;
        this.setState({
            [name]: value
        });
        this.props.getSearchText(this.state.searchText);
    }
    getTextSearch = () => {
        this.props.getSearchText(this.state.searchText);
    }

    render() {
        
        return (
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <div className="form-group">
                            <div className="btn-group btn-block">
                            <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="searchText" placeholder="Nhập tên người dùng" />
                            <div onClick={()=> this.getTextSearch()} className="btn btn-secondary"><i className="fa fa-search" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-right">
                        {
                            this.showButton()
                        }
                        
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default Search;