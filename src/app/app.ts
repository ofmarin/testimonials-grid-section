import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestimonialDataProvider} from './card/testimonial-data-provider';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  templateUrl: 'app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('testimonials-grid-section');

  data = inject(TestimonialDataProvider);
  testimonials = this.data.getTestimonial();
}
