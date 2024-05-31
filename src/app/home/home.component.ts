import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Animation 1: Fade in and move up
    gsap.from(".fade-up", {
      scrollTrigger: {
        trigger: ".fade-up",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: true,
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // Animation 2: Rotate
    gsap.from(".rotate", {
      scrollTrigger: {
        trigger: ".rotate",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: true,
      },
      opacity: 0,
      rotation: 180,
      duration: 1
    });

    // Animation 3: Scale
    gsap.from(".scale", {
      scrollTrigger: {
        trigger: ".scale",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: true,
      },
      opacity: 0,
      scale: 0.5,
      duration: 1
    });
  }

}
