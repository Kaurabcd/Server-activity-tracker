import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
close= output();
data = input.required<Ticket>();
  // close= output({alias:'closemarkup'});
  // data = input.required<Ticket>({alias:'ticketData', transform:(value)=>value});
detailsVisible= signal(false);

onToggleDetails(){
  // this.detailsVisible.set(!this.detailsVisible);
  this.detailsVisible.update((wasVisible)=> !wasVisible)
}

onMarkAsCompleted(){
  this.close.emit();
}
}
