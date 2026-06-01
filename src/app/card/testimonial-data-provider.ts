import { Injectable } from '@angular/core';
import {Testimonial} from './testimonial'

@Injectable({
  providedIn: 'root',
})
export class TestimonialDataProvider {
  testimonials: Testimonial[] = [
    {
      image: 'images/image-daniel.jpg',
      name: 'Daniel Clifford',
      status: 'Verified Graduate',
      description:
        'I received a job offer mid-course, and the subjects I learned were current, if not more so,\n' +
        'in the company I joined. I honestly feel I got every penny’s worth.',
      content:
        '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a\n' +
        'transition and have heard some people who had an amazing experience here. I signed up\n' +
        'for the free intro course and found it incredibly fun! I enrolled shortly thereafter.\n' +
        'The next 12 weeks was the best - and most grueling - time of my life. Since completing\n' +
        'the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”',
    },
    {
      image: 'images/image-jonathan.jpg',
      name: 'Jonathan Walters',
      status: 'Verified Graduate',
      description: 'The team was very supportive and kept me motivated',
      content:
        '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer\n' +
        'for a big company. This was one of the best investments I’ve made in myself. ”',
    },
    {
      image: 'images/image-jeanette.jpg',
      name: 'Jeanette Harmon',
      status: 'Verified Graduate',
      description: 'An overall wonderful and rewarding experience',
      content:
        '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living' +
        'while doing something I love. ”',
    },
    {
      image: 'images/image-patrick.jpg',
      name: 'Patrick Abrams',
      status: 'Verified Graduate',
      description:
        'I received a job offer mid-course, and the subjects I learned were current, if not more so,\n' +
        'in the company I joined. I honestly feel I got every penny’s worth.',
      content:
        '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a\n' +
        'transition and have heard some people who had an amazing experience here. I signed up\n' +
        'for the free intro course and found it incredibly fun! I enrolled shortly thereafter.\n' +
        'The next 12 weeks was the best - and most grueling - time of my life. Since completing\n' +
        'the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”',
    },
    {
      image: 'images/image-kira.jpg',
      name: 'Kira Whittle',
      status: 'Verified Graduate',
      description: 'Such a life-changing experience. Highly recommended!',
      content:
        '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from\n' +
        'professionals who can help me learn programming step by step. I was encouraged to enroll by a former\n' +
        'student of theirs who can only say wonderful things about the program. The entire curriculum and staff\n' +
        'did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team\n' +
        'project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial\n' +
        'could ever have. In fact, I’ve often referred to it during interviews as an example of my developent\n' +
        'experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.\n' +
        '100% recommend! ”',
    },
  ];

  getTestimonial(): Testimonial[] {
    return this.testimonials;
  }
}
