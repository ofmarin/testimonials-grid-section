import { Component, computed, input, InputSignal } from '@angular/core';
import { Testimonial } from './testimonial';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {
  testimonial: InputSignal<Testimonial> = input.required<Testimonial>();


  testimonials = computed(() => {
    if (this.testimonial().name === 'Daniel Clifford') {
      return 'daniel';
    } else if (this.testimonial().name === 'Jonathan Walters') {
      return 'jonathan';
    } else if (this.testimonial().name === 'Jeanette Harmon') {
      return 'jeanette';
    } else if (this.testimonial().name === 'Patrick Abrams') {
      return 'patrick';
    } else if (this.testimonial().name === 'Kira Whittle') {
      return 'kira';
    }

    return;
  });
}
