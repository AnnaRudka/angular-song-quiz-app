import { Injectable, ɵsetCurrentInjector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  scores: number[] = [];

  constructor() { }

  setScore(value:number){
    this.scores.push(value);
  }

  getScore(index:number) {
    return this.scores[index];
  }
  
  getTotalScore(){
    return this.scores.reduce((sum,current) => sum + current, 0);
  }
}
