import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
    if (this.autoSlide) {
      this.autoSlideSlides();
    }
  }

  setMetaTags() {
    this.meta.updateTag({ name: 'title', content: 'Client Testimonials | What Our Clients Say' });
    this.meta.updateTag({ name: 'description', content: 'Read what our clients say about us. Discover testimonials showcasing our commitment to providing excellent legal services.' });
    this.meta.updateTag({ name: 'keywords', content: 'Testimonials, Client Reviews, Legal Services' });
    this.meta.updateTag({ property: 'og:title', content: 'Client Testimonials | What Our Clients Say' });
    this.meta.updateTag({ property: 'og:description', content: 'Read what our clients say about us. Discover testimonials showcasing our commitment to providing excellent legal services.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'http://yourdomain.com/testimonials' });
    this.meta.updateTag({ property: 'og:image', content: 'http://yourdomain.com/path-to-your-image.jpg' });
  }

  autoSlideSlides(): void {
    setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  testimonials = [
    {
      id: 1,
      testimony: "Brilliant work. I am very happy with the results. I will definitely be using them again.",
      name: "Monkey D. Luffy",
    },
    {
      id: 2,
      testimony: "The lawyer is so awesome. She is very professional and knowledgeable. I will definitely be using her again.",
      name: "Zoro Roronoa",
    },
    {
      id: 3,
      testimony: "Got my visa quickly.",
      name: "Shanks",
    },
    {
      id: 4,
      testimony: "Punctual and professional.",
      name: "Nami",
    },
  ];

  selectedIndex = 0;
  indicators = true;

  selectSlide(index: number): void {
    this.selectedIndex = index;
  }

  controls = true;

  prevSlide(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.testimonials.length - 1;
    }
    else {
      this.selectedIndex--;
    }
  }

  nextSlide(): void {
    if (this.selectedIndex === this.testimonials.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex++;
    }
  }

  autoSlide = true;
  interval = 2500;
}
