import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    showDataUserList = () => {
        if(this.props.showDataUser){
            return this.props.showDataUser.map((value, key) => {
                return(
                    <TableDataRow
                        key= {key}
                        i={key}
                        name={value.name}
                        phone={value.phone}
                        email={value.email}
                        permission={value.permission}
                        changeEditUser={()=>this.props.changeEditUser()}
                        getEditInfoApp={(user)=>this.props.getEditInfoApp(value)}
                        deleteDataUser={(idUser) => this.props.deleteDataUser(value.id)}
                    />
                )
            })
        }
    }
    render() {
        // console.log(this.props.showDataUser);
        return (
            
            <div className="col">
                <table className="table table-bordered table-striped table-inverse text-center">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Quyền</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.showDataUserList()
                        }
                    </tbody>
                </table>    
            </div>
                    
                    
        );
    }
}

export default TableData;