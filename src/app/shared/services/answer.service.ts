import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnswerService {
  private _error$ = new BehaviorSubject<string>('');
  error$ = this._error$.asObservable();

  ROOT_URL ='levi9-song-quiz.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getImage(id: number) {
    const link = `${this.ROOT_URL}images/${id}`;
    return this.http.get(link).pipe(
      catchError(() => {
        const message = "Error, Couldn't get image";
        this._error$.next(message);
        return EMPTY;
      })
    );
  }

  getAudio(id: number) {
    const link = `${this.ROOT_URL}audio/${id}`;
    return this.http.get(link).pipe(
      catchError(() => {
        const message = "Error, Couldn't get image";
        this._error$.next(message);
        return EMPTY;
      })
    );
  }
}
