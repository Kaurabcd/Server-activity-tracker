import { Component, signal } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from './ticket/ticket.component';
import { Ticket } from './ticket.model';
@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent,TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
tickets:Ticket[]=[];
image= signal({src:'list.png', alt:'tickets'});
title=signal("Support tickets")

onTicketAdd(ticket:Ticket){
  this.tickets.push(ticket)
}
 
onCloseTicket(id:string){
  this.tickets =this.tickets.map((ticket)=>{
    if(ticket.id===id){
      return {...ticket, status:'close'};
    }
    return ticket;
  });
}
}
