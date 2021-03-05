import React, { Component } from 'react';

class EditUser extends Component {
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
    componentWillReceiveProps(nextProps) {
        if(nextProps.editUserObj){
            this.setState({
                id: nextProps.editUserObj.id,
                name: nextProps.editUserObj.name,
                avatar: nextProps.editUserObj.avatar,
                birthday: nextProps.editUserObj.birthday,
                sex: nextProps.editUserObj.sex,
                phone: nextProps.editUserObj.phone,
                email: nextProps.editUserObj.email,
                job: nextProps.editUserObj.job,
                permission: nextProps.editUserObj.permission
            });
        }
    }
    
    
    isEditChange = (event) => {
        const name = event.target.name;
        const value =event.target.value;
        this.setState({
            [name]: value
        });
        

    }
    saveEditUser = () => {
        if(this.state.id){
            var itemUserEdit = {};
            itemUserEdit.id = this.state.id;
            itemUserEdit.name = this.state.name;
            itemUserEdit.avatar = this.state.avatar;
            itemUserEdit.birthday = this.state.birthday;
            itemUserEdit.sex = this.state.sex;
            itemUserEdit.phone = this.state.phone;
            itemUserEdit.email = this.state.email;
            itemUserEdit.job = this.state.job;
            itemUserEdit.permission = this.state.permission;
        }
        
        this.props.getEditDataUser(itemUserEdit);
        this.props.changeEditUserApp();
    }
    
    
    
    showEditUser = () => {
        if(this.props.statusEditUser === true){
            return(
                <div className="col">
                    <form>
                        <div className="card bg-warning">
                            <div className="card-header text-center text-white">
                                <h5>Sửa người dùng</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.name} onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="name" placeholder="Nhập tên" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.avatar} onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="avatar" placeholder="Nhập link ảnh đại diện" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.birthday} onChange={(event)=>this.isEditChange(event)} type="date" className="form-control" name="birthday" placeholder="Nhập ngày sinh" />
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.editUserObj.sex} onChange={(event)=>this.isEditChange(event)} className="form-control" name="sex" >
                                        <option value="">Chọn giới tính</option>
                                        <option value="1">Nam</option>
                                        <option value="0">Nữ</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.phone} onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="phone" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.email} onChange={(event)=>this.isEditChange(event)} type="email" className="form-control" name="email" placeholder="Nhập email" />
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.editUserObj.job} onChange={(event)=>this.isEditChange(event)} className="form-control" name="job" >
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
                                    <select defaultValue={this.props.editUserObj.permission} onChange={(event)=>this.isEditChange(event)} className="form-control" name="permission" >
                                        <option value="">Chọn quyền</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">Normal</option>
                                    </select>
                                </div>
                                {/* <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.name}  onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Nhập tên" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.phone}  onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="phone" aria-describedby="helpId" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.editUserObj.permission}  onChange={(event)=>this.isEditChange(event)} className="form-control" name="permission">
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">Normal</option>
                                    </select>
                                </div> */}
                                <div className="form-group">
                                    <input onClick={()=>this.saveEditUser()} className="btn btn-block btn-info" type="reset" value="Lưu" /> 
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
        else return true;
    }
    render() {
        // console.log(this.props.editUserObj);
        return (
            <div>
                {
                    this.showEditUser()
                }
            </div>

        );
    }
}

export default EditUser;