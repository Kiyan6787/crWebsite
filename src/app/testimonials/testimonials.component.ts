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
    this.meta.updateTag({ property: 'og:url', content: 'http://ramjanumcattorneys.co.za/#testimonials' });
    this.meta.updateTag({ property: 'og:image', content: 'http://ramjanumcattorneys.co.za/path-to-your-image.jpg' });
  }

  autoSlideSlides(): void {
    setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  testimonials = [
    {
      id: 1,
      testimony: "I cannot thank Ramjanum C Attorney enough for their incredible support in helping my mom secure her Spousal Visa. The process was incredibly hectic, as her Spousal Visa expired during COVID, and due to a lack of knowledge, we mistakenly applied for permanent residency before the 5-year requirement was met. As a result, my mom was banned from entering South Africa. But Ramjanum C Attorney came to our rescue, guiding us through the legal complexities and helping us fight against Home Affairs in court. She also worked tirelessly to have the border ban at Bait Bridge South African side lifted. Thanks to her expertise and dedication, everything was handled seamlessly, and my mom has now received a two-year Spousal Visa. We are now in the process of gathering the necessary documents to apply for her permanent residency in time. Ramjanum C Attorney Associates truly are the best, and I would highly recommend them to anyone in need of immigration assistance. Their professionalism and care made all the difference!",
      name: "Monkey D. Luffy",
    },
    {
      id: 2,
      testimony: "She provided exceptional assistance with my visa application process, helping me change my status seamlessly. Thanks to her expertise, my visa was approved within just seven days, and I collected it in three weeks. Her kindness, professionalism, and well-organized approach made the entire experience stress-free. She ensured I understood every step of the process, leaving me feeling confident and at ease. I highly recommend her services to anyone seeking efficient and reliable legal assistance.",
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
  interval = 5000;
}

