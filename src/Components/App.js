import React, { Component } from 'react';
import '.././App.css';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import {DataUser} from './ConnectFirebase';
import Footer from './Footer';
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        statusButton: true,
        dataFirebase: [],
        searchText:'',
        statusEdit: false,
        editUserObj:{}
      }
  }
  
  componentWillMount() {
    DataUser.on('value', (notes)=>{
      var arrayData = [];
      notes.forEach(element =>{
          const key = element.key;
          const name = element.val().name;
          const phone = element.val().phone;
          const email = element.val().email;
          const permission = element.val().permission;
          arrayData.push({
            id: key,
            name: name,
            phone: phone,
            email: email,
            permission: permission
          })
      })
      this.setState({
        dataFirebase: arrayData
      });
      
    })
  }
  
  changeStatusButton = () => {
    this.setState({
      statusButton: !this.state.statusButton
    });
  }
  getDataUser = (name, avatar, birthday, sex, phone, email, job, permission) => {
      var item = {};
      item.name = name;
      item.avatar = avatar;
      item.birthday = birthday;
      item.sex = sex;
      item.phone = phone;
      item.email = email;
      item.job = job;
      item.permission = permission;
      // console.log(item);
      DataUser.push(item);
  }
  getSearchText = (textSearch) => {
    // console.log(textSearch);
    this.setState({
      searchText: textSearch
    });
  }
  changeEditUser = () => {
    this.setState({
      statusEdit: !this.state.statusEdit
    });
  }
  getEditInfo = (user) => {
    // console.log(user);
    this.setState({
      editUserObj: user
    });
  }
  getEditDataUser = (editDataUser) => {
      console.log(editDataUser);
      DataUser.child(editDataUser.id).update({
          name : editDataUser.name,
          avatar : editDataUser.avatar,
          birthday : editDataUser.birthday,
          sex : editDataUser.sex,
          phone : editDataUser.phone,
          email : editDataUser.email,
          job : editDataUser.job,
          permission : editDataUser.permission
      })
  }
  deleteDataUserApp = (idUser) => {
      console.log(idUser);
      DataUser.child(idUser).remove();
  }
  
  render() {
    // console.log(this.state.searchText);
    var ketqua =[];
    this.state.dataFirebase.forEach(item=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    // console.log(this.state.editUserObj);
    return (
      <div className="App">
        <Header/>
        <Search
          changeStatusButton={()=>this.changeStatusButton()} 
          statusButton={this.state.statusButton}
          getSearchText={(textSearch)=>this.getSearchText(textSearch)}
        />
        <div className="container mt-4">
          <div className="row">
            <AddUser
              statusFormAdd={this.state.statusButton}
              getDataUser={(name, avatar, birthday, sex, phone, email, job, permission)=> this.getDataUser(name, avatar, birthday, sex, phone, email, job, permission)}
              changeStatusButton={()=>this.changeStatusButton()}
            />
            <TableData 
              showDataUser={ketqua}
              changeEditUser={()=>this.changeEditUser()}
              getEditInfoApp={(user)=>this.getEditInfo(user)}
              deleteDataUser={(idUser)=>this.deleteDataUserApp(idUser)}
            />
            <EditUser 
              statusEditUser={this.state.statusEdit} 
              editUserObj={this.state.editUserObj}
              getEditDataUser={(editDataUser)=>this.getEditDataUser(editDataUser)}
              changeEditUserApp={(idUser)=>this.changeEditUser(idUser)}
            />
          </div>
        </div>
        <Footer/>
        
      </div>
    );
  }
}

export default App;