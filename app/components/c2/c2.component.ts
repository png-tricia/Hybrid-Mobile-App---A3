import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component implements OnInit {
  questionAnswer!: any;
  hideLoadingDots: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentNasaData.subscribe((moon) => {
      this.questionAnswer = moon;
      /* when the answer loads, then the loading dots disappear :D */
      this.hideLoadingDots = !this.hideLoadingDots;
    });
  }
}
