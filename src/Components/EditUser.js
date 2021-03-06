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
                                <h5>S???a ng?????i d??ng</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.name} onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="name" placeholder="Nh???p t??n" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.avatar} onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="avatar" placeholder="Nh???p link ???nh ?????i di???n" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.birthday} onChange={(event)=>this.isEditChange(event)} type="date" className="form-control" name="birthday" placeholder="Nh???p ng??y sinh" />
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.editUserObj.sex} onChange={(event)=>this.isEditChange(event)} className="form-control" name="sex" >
                                        <option value="">Ch???n gi???i t??nh</option>
                                        <option value="1">Nam</option>
                                        <option value="0">N???</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.phone} onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="phone" placeholder="Nh???p s??? ??i???n tho???i" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.email} onChange={(event)=>this.isEditChange(event)} type="email" className="form-control" name="email" placeholder="Nh???p email" />
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.editUserObj.job} onChange={(event)=>this.isEditChange(event)} className="form-control" name="job" >
                                        <option value="">Ch???n ngh??? nghi???p</option>
                                        <option value="student">H???c sinh/Sinh vi??n</option>
                                        <option value="engineer">K??? s??</option>
                                        <option value="doctor">B??c s??</option>
                                        <option value="developer">L???p tr??nh vi??n</option>
                                        <option value="sale_staff">Nh??n vi??n sale</option>
                                        <option value="reale_state">B???t ?????ng s???n</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.editUserObj.permission} onChange={(event)=>this.isEditChange(event)} className="form-control" name="permission" >
                                        <option value="">Ch???n quy???n</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">Normal</option>
                                    </select>
                                </div>
                                {/* <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.name}  onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Nh???p t??n" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserObj.phone}  onChange={(event)=>this.isEditChange(event)} type="text" className="form-control" name="phone" aria-describedby="helpId" placeholder="Nh???p s??? ??i???n tho???i" />
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.editUserObj.permission}  onChange={(event)=>this.isEditChange(event)} className="form-control" name="permission">
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">Normal</option>
                                    </select>
                                </div> */}
                                <div className="form-group">
                                    <input onClick={()=>this.saveEditUser()} className="btn btn-block btn-info" type="reset" value="L??u" /> 
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