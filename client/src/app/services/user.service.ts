import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

      getUsers() {
    return this.http.get("http://localhost:3000/api/user")
      .map((res: Response) => res.json())
      .catch(this.handleError);
      }

    updateUser(data) {
        return this.http.put("http://localhost:3000/api/user",data)
            .map((res: Response) => res.json())
            .catch(this.handleError);
        }
     addUser(data) {
        return this.http.post("http://localhost:3000/api/user",data)
            .map((res: Response) => res.json())
            .catch(this.handleError);
        }
        deleteUser(userId){
          return this.http.delete("http://localhost:3000/api/user/"+userId)
          .map((res:Response)=>res.json())
          .catch(this.handleError);
        }

    public handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }


}
