import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent {
label= input.required<string>()
private el= inject(ElementRef);

// @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLAreaElement>
private control = contentChild.required<ElementRef<HTMLInputElement | HTMLAreaElement>>('input')

constructor(){
  afterRender(()=>{
    console.log('afterRender');
  })
  afterNextRender(()=>{
    console.log('afterNextRender');
  })
}
ngAfterContentInit(){
  //...
}

onClick(){
  console.log(this.el)
  console.log(this.control())
}
}
