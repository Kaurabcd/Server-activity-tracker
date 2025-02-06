import { Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent,ButtonComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  enteredTitle='';
  enteredRequest='';
  @Output() add = new EventEmitter<Ticket>();
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @ViewChild(ButtonComponent) btn?: ElementRef<ButtonComponent>;
// private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

ngOnInit(){
  console.log('ONINIT');
  console.log(this.form?.nativeElement);
  
}
ngAfterViewINit(){
  console.log('After view init');
  console.log(this.form?.nativeElement);
}
  // onSubmit(titleElement:HTMLInputElement){
  //   console.log('title:' + titleElement.value)
  //   console.log(titleElement);
  //   console.dir(titleElement);  //prints object
    
  // }
  // onSubmit(title:string, request:string,form:HTMLFormElement){
  //   console.log(title);
  //   console.dir(request);  //prints object
  //   form.reset();
  // }
  // onSubmit(title:string, request:string){
  //   console.log(title);
  //   console.dir(request);  //prints object
  //   this.form?.nativeElement.reset();
  //   let ticket:Ticket={
  //     id: Math.random().toString(),
  //     title: title,
  //     request: request,
  //     status: 'open'
  //   }
  //   this.add.emit(ticket);
  // }
  onSubmit(){
    let ticket:Ticket={
      id: Math.random().toString(),
      title: this.enteredTitle,
      request: this.enteredRequest,
      status: 'open'
    }
    this.add.emit(ticket);
  }
}
