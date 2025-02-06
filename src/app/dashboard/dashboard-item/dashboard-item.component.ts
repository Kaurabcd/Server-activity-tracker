import { Component, HostBinding, HostListener, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation: ViewEncapsulation.None,
  // host: {
  //   class:'dashboard-item',
  //   '(click)': 'onClick()'
  // }
})
export class DashboardItemComponent {
  @HostBinding('class') className ='control'
  @HostListener('click') onClick(){
    console.log('clicked');
  }
// @Input({required: true}) image!:{ src:string; alt:string};
// @Input({required:true}) title!: string;
image = input.required<{ src:string; alt:string}>();
title = input.required<string>()

}
