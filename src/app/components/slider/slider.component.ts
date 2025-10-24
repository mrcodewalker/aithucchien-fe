import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  images: string[] = [
    'assets/images/main.jpg',
    'assets/images/24d092c5be3633686a275.jpg',
    'assets/images/a465a84484b709e950a68.jpg',
    'assets/images/main4.jpg',
    'assets/images/main5.jpg',
    'assets/images/main6.jpg',
    'assets/images/main7.jpg',
    'assets/images/main8.jpg',
    'assets/images/f53416683a9bb7c5ee8a1.jpg',
    'assets/images/00f654e77814f54aac056.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }
}
