import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
// export class ServerStatusComponent implements OnInit, OnDestroy{
//   // currentStatus = 'online';
//   currentStatus: 'online'|'offline' |'unknown'='offline';  // literal types
//   image={src:'list.png', alt:'tickets'};
//   title="Support tickets"
// //  private interval?: NodeJS.Timeout
//  private interval?: ReturnType<typeof setInterval>
// constructor(){
 
// }
// ngOnInit(){
//   console.log('On Init');
  
//   this.interval=setInterval(()=>{
//     const rd= Math.random(); // 0 - 0.999999999
//     if(rd<0.5)
//       this.currentStatus = 'online';
//     else if(rd < 0.9)
//       this.currentStatus = 'offline';
//     else
//     this.currentStatus = 'unknown';
//   },5000)
// }
// ngAfterViewInit(){
//   console.log('After view init');
  
// }
// ngOnDestroy(){
// clearInterval(this.interval)
// }

export class ServerStatusComponent implements OnInit{
  // currentStatus = 'online';
  // currentStatus: 'online'|'offline' |'unknown'='offline';  // literal types
  currentStatus= signal<'online'|'offline' |'unknown'>('offline');  // literal types
  image={src:'list.png', alt:'tickets'};
  title="Support tickets"

private destroyRef = inject(DestroyRef);
constructor(){
 effect(()=>{
  console.log(this.currentStatus());
  
 })
}
ngOnInit(){
  console.log('On Init');
  
  const interval=setInterval(()=>{
    const rd= Math.random(); // 0 - 0.999999999
    if(rd<0.5)
      // this.currentStatus = 'online';
      this.currentStatus.set('online');
    else if(rd < 0.9)
      // this.currentStatus = 'offline';
      this.currentStatus.set('offline');
    else
    this.currentStatus.set('unknown');
  },5000)

  this.destroyRef.onDestroy(()=>{
    clearInterval(interval);
  })
}
ngAfterViewInit(){
  console.log('After view init');
  
}
// ngOnDestroy(){
// clearInterval(this.interval)
// }
}
