import { Component } from '@angular/core';
import { DjEmailServiceService } from '../../services/dj-email-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dj',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dj.component.html',
  styleUrl: './dj.component.scss'
})
export class DjComponent {
  djBookingRequestForm = new FormGroup({
    customerName: new FormControl('', Validators.required),
    customerEmail: new FormControl('', Validators.required),
    customerTelephone: new FormControl(''),
    eventDatetime: new FormControl('', Validators.required),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    eventType: new FormControl(''),
    surprise: new FormControl(''),
    attendeeCount: new FormControl(''),
    venueStreet: new FormControl(''),
    venueCity: new FormControl(''),
    venueZip: new FormControl(''),
    comments: new FormControl('')
  });
  hasBooked = false;

  constructor(private djService: DjEmailServiceService) { }

  submitDjForm() {
    let successState = this.djService.addDocumentToFirestore(this.djBookingRequestForm.value);

    successState.catch((e) => {
      console.log(e);
      this.hasBooked = false;
    }).finally(() => {
      this.hasBooked = true;

    });
  }

  resetDjForm() {
    this.djBookingRequestForm.reset();

  }
}
