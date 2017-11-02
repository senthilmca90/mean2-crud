import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public userDetails:any;
public udpateEnabled = false;
public newUserPage = false;
// public user:any;
public user={};
form : FormGroup;
  constructor(private userService : UserService) { }

  ngOnInit() {
   this.getAllUser();

  }

    getAllUser(){
      this.udpateEnabled = false;
       this.userService.getUsers().subscribe(data => {  
          console.log(data);  
          this.userDetails = data;
        },
        error => { console.log(error); },
        () => console.log('user details.')
      );
    }

  editUser(user:any){
    this.udpateEnabled = true;
    this.user = user;
  }
newUser(){
  this.newUserPage = true;
    this.udpateEnabled = true;
  }

  save(user:any){   
    var result
    ,userValue=user;
    if(userValue._id){
        result = this.userService.updateUser(userValue);
    }else{
      result = this.userService.addUser(userValue);

    }
    result.subscribe(data => this.getAllUser());
   
  }
  deleteUser(userId:any){
    var result=this.userService.deleteUser(userId);
    result.subscribe(data => this.getAllUser());
  }




}
