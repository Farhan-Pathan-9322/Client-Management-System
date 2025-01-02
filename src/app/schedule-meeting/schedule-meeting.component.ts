import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrl: './schedule-meeting.component.css'
  
})
export class ScheduleMeetingComponent {
  topic = '';
  numberOfPeople = 0;
  startTime = '';
  endTime = '';
  date = '';
  headingscedule = 'Create a Meeting Schedule'
  
  constructor(private router: Router,private http: HttpClient) {}

  onScheduleMeeting() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
  
    if (!user.id) {
      alert('You must be logged in to schedule a meeting.');
      this.router.navigate(['/login']); // Redirect to login page if user is not logged in
      return;
    }
  
    this.http
      .post('http://localhost:5000/schedule', {
        userId: user.id,
        topic: this.topic,
        numberOfPeople: this.numberOfPeople,
        startTime: this.startTime,
        endTime: this.endTime,
        date: this.date,
      })
      .subscribe((response: any) => {
        alert(response.message);
        if (response.message === 'Meeting scheduled successfully!') { 
          this.router.navigate(['/view-meetings']); 
        }
      });
  }
  
}
