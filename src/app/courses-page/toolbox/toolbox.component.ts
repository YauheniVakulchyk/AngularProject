import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  item: string;

  constructor() {
  }

  ngOnInit() {
  }

  findItem() {
    console.log(this.item);
  }

}
