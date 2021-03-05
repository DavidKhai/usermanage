import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            avatar: '',
            birthday:'',
            sex: '',
            phone:'',
            email: '',
            job: '',
            permission:''
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value =event.target.value;
        this.setState({
            [name]: value
        });
        

    }
    AddUser = () => {
        if((this.state.name !== "") && (this.state.avatar !== "") && (this.state.birthday !== "") && (this.state.sex !== "") && (this.state.phone !== "") && (this.state.email !== "") && (this.state.job !== "") && (this.state.permission !== "")){
            this.props.getDataUser(this.state.name, this.state.avatar, this.state.birthday, this.state.sex, this.state.phone, this.state.email, this.state.job, this.state.permission);

            this.props.changeStatusButton();
        }
        else{
            alert("Vui lòng nhập đủ thông tin");
        }
        
    }
    showFormAdd = () => {
        if(this.props.statusFormAdd === false){
            return(
                <div className="col-12">
                    <form method="post">
                        <div className="card">
                            <div className="card-header text-center text-danger">
                                <h5>Thêm người dùng</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="name" placeholder="Nhập tên" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="avatar" placeholder="Nhập link ảnh đại diện" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} type="date" className="form-control" name="birthday" placeholder="Nhập ngày sinh" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event)=>this.isChange(event)} className="form-control" name="sex" >
                                        <option value="">Chọn giới tính</option>
                                        <option value="1">Nam</option>
                                        <option value="0">Nữ</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="phone" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} type="email" className="form-control" name="email" placeholder="Nhập email" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event)=>this.isChange(event)} className="form-control" name="job" >
                                        <option value="">Chọn nghề nghiệp</option>
                                        <option value="student">Học sinh/Sinh viên</option>
                                        <option value="engineer">Kỹ sư</option>
                                        <option value="doctor">Bác sĩ</option>
                                        <option value="developer">Lập trình viên</option>
                                        <option value="sale_staff">Nhân viên sale</option>
                                        <option value="reale_state">Bất động sản</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select onChange={(event)=>this.isChange(event)} className="form-control" name="permission" >
                                        <option value="">Chọn quyền</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input onClick={()=> this.AddUser()} className="btn btn-block btn-info" type="reset" value="Thêm mới" /> 
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
        else{
            return true;
        }
    }
    render() {
        return (
            <div className="col-12 mb-3">
                {
                    this.showFormAdd()
                }
            </div>    
        );
    }
}

export default AddUser;