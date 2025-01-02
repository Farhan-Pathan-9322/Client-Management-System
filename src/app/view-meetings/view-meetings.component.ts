import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-meetings',
  templateUrl: './view-meetings.component.html',
  styleUrl: './view-meetings.component.css',
})
export class ViewMeetingsComponent implements OnInit {
  meetings: any[] = [];
  message: any;
user: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user.id) {
      alert('You must be logged in to view your meetings.');
      return;
    }

    this.http
      .get(`http://localhost:5000/meetings/${user.id}`)
      .subscribe((response: any) => {
        this.meetings = response;
      });
  }

  deleteMeeting(id: any) {
   
    if (confirm('Are you sure you want to delete this meeting?')) {
      
      this.http.delete(`http://localhost:5000/deleteMeeting/${id}`)
        .subscribe(
          (response: any) => {
            this.message = response.message;
            console.log('data deleted'+id);
            this.ngOnInit(); 
          },
          (error) => {
            console.error('Error in deleting the meeting', error);
          }
        );
    }
    else{
      console.log('Failed !!');
    }
  }
  
 

}

