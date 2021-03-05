import React, { Component } from 'react';

class TableDataRow extends Component {
    showPermission = () => {
        if(parseInt(this.props.permission) === 1) return "Admin";
        else if(parseInt(this.props.permission) === 2) return "Moderator";
        else if(parseInt(this.props.permission) === 3) return "Normal";
    }
    editUser = () => {
        this.props.changeEditUser();
        // console.log(this.props.note);
        this.props.getEditInfoApp();
    }
    deleteUser = () => {
        this.props.deleteDataUser();
    }
    render() {
        return (
            <tr>
                <td>{this.props.i + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.email}</td>
                <td>{this.showPermission()}</td>
                <td>
                    <div className="btn-group">
                        <button onClick={()=>this.editUser()} className="btn btn-sm btn-warning text-white"><i className="fa fa-edit" /> Sửa</button>
                        <button onClick={()=>this.deleteUser()} className="btn btn-sm btn-danger text-white"> <i className="fa fa-remove" /> Xóa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;