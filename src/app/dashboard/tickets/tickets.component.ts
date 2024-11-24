import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
image= signal({src:'list.png', alt:'tickets'});
title=signal("Support tickets")
}
