import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare let gsap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor() {
    
  }

  ngOnInit(): void {
    gsap.to('.blanc', {
      scrollTrigger: {
        trigger: '.blanc',
        start: 'top center',
        end: 'bottom top',
        // scrub: true,

        markers: true
      },
      x: 1000,
      duration: 5,
    });
  }


}
