import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  listName: string;
  date: string;
  noOfEntities: number;
  actions: string;
  id:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: "Jul 23", listName: 'Competitive Intelligence', noOfEntities: 1.0079, actions: 'exla',id:1},
  {date: "Jul 24", listName: 'My Vendors', noOfEntities: 4.0026, actions: 'exla',id:2},
  {date: "Jul 25", listName: 'My Customers', noOfEntities: 6.941, actions: 'ring',id:3},
  {date: "Jul 26", listName: 'Test_30_results', noOfEntities: 9.0122, actions: 'ring',id:4},
  {date: "Jul 27", listName: 'To_index', noOfEntities: 10.811, actions: 'ring',id:5},
  {date: "Jul 28", listName: 'KPMG requested companies', noOfEntities: 12.0107, actions: 'ring',id:6},
  {date: "Jul 29", listName: 'Error Case', noOfEntities: 14.0067, actions: 'ring',id:7},
  {date: "Jul 30", listName: 'Two Companies', noOfEntities: 15.9994, actions: 'ring',id:8},
  {date: "Jul 31", listName: 'custom', noOfEntities: 18.9984, actions: 'ring',id:9},
  {date: "Aug 01", listName: 'Mumbai', noOfEntities: 20.1797, actions: 'ring',id:10},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:any;
  @ViewChild('table', {static: false}) table: MatTable<any>;
  @ViewChild('filter', {static: false}) filter: ElementRef;

  displayedColumns: string[] = ['date', 'listName', 'noOfEntities', 'actions',"id"];
  dataSource = ELEMENT_DATA;


  detailShow(val){
    console.log(val);
    this.data=val;
  }
}
