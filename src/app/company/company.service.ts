import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
@Injectable()
export class CompanyService {
  company$: FirebaseObjectObservable<any>;
  constructor(private db:AngularFireDatabase) {
    this.company$ = this.db.object(`company`);
   }

  ngOnInit() {
  }
  saveCompany(company){
    this.company$.set({name:company.name}).then(_=>console.log('success')).catch(error=>console.log(error));
  }

  editCompany(company){
    this.company$.update(company).then(_=>console.log('success')).catch(error=>console.log(error));
  }

    removeCompany(company){
    this.company$.remove().then(_=>console.log('success')).catch(error=>console.log(error));
  }

}
