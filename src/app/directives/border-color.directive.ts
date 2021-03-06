import {Directive, Input, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {

  @Input() courseDate: Date;

  private borderColor = 'blue';

  ngOnInit() {
    /*const twoWeekAgoDate = new Date();
    twoWeekAgoDate.setDate(twoWeekAgoDate.getDate() - 14);
    const twoWeekAgoDateTime = twoWeekAgoDate.getTime();
    if (this.courseDate.getTime() < new Date().getTime() && this.courseDate.getTime() >= twoWeekAgoDateTime) {
      this.borderColor = 'green';
    }
    if (this.courseDate.getTime() > new Date().getTime()) {
      this.borderColor = 'blue';
    }*/
  }
  constructor() {}

  @HostBinding('style.border-color') get getBorderColor(){
    return this.borderColor;
  }

}
