import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  company$: FirebaseObjectObservable<any>;
  constructor(private db:AngularFireDatabase) {
    this.company$ = this.db.object(`company`);
   }

  ngOnInit() {
  }
  saveCompany(company){
    this.company$.set(company);
  }
}
