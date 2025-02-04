import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component implements OnInit {
  astroData: any[] = []; // an array of questions
  answer: any = { msg: '', id: '' };
  id: any;

  constructor(private dataService: DataService) {}

  // we are going to store the data inside the astroData variable
  ngOnInit() {
    this.dataService.getAstronomyQuestionsData().subscribe((res) => {
      this.astroData = res;
    });
  }

  // send the question id to the backend to request the corresponding answer
  sendQuestionId(value: any) {
    this.id = value;
    const data = { id: this.id };

    // this will allow us to see that we can retrieve the answer in c1.component.ts
    this.dataService.sendQuestionId(data).subscribe({
      next: (data: any) => {
        this.answer = data;
        this.dataService.setData(this.answer.msg); // I am externally crying at this point, using my assignment 2 knowledge 
      },
      error: (e) => {
        console.error(e);
        this.answer.msg = e.message;
      },
      complete: () => console.info('Complete'),
    });
  }
}
