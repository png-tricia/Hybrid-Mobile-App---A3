import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // subscribe to my youtube channel and you'll get the latest update (˵◡‿◡⑅)
  nasaData = new BehaviorSubject<any>('');
  currentNasaData = this.nasaData.asObservable();

  setData(data: any) {
    this.nasaData.next(data);
  }

  constructor(private http: HttpClient) {}

  // load the JSON file
  getAstronomyQuestionsData(): Observable<any> {
    return this.http.get('assets/data/AstroQuestions.json');
  }

  // we want to send the ID -hidden attribute- of the question to the backend (Week 9 Exercises)
  sendQuestionId(data: any): Observable<any> {
    return this.http.get('http://127.0.0.1:8887/sendQuestionId/', {
      params: data,
    });
  }
}
