import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, tap } from 'rxjs';
import { Question } from '../../models/question.model';
import { API_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private _questions$ = new BehaviorSubject<Question[]>([]);
  questions$ = this._questions$.asObservable();

  private _isLoading$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading$.asObservable();

  private _error$ = new BehaviorSubject<string>('');
  error$ = this._error$.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions() {
    this._isLoading$.next(true);

    const link = API_URL + '/data';
    return this.http.get<Question[]>(link).pipe(
      tap((data) => {
        this._isLoading$.next(false);
        this._questions$.next(data);
      }),
      catchError(() => {
        const message = "Error, Couldn't get question";
        this._isLoading$.next(false);
        this._error$.next(message);
        return EMPTY;
      })
    );
  }

}
