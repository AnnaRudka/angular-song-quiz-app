import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { QuestionService } from './question.service';
import { Question } from '../../models/question.model';
import { API_URL } from 'src/app/constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const questionsMock: Question[] = [
  {
    id: '1',
    genre: 'jazz',
    data: [],
  },
  {
    id: '2',
    genre: 'rock',
    data: [],
  },
];

describe('QuestionService', () => {
  let service: QuestionService;
  let httpController: HttpTestingController;
  let url = API_URL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuestionService],
    });
    service = TestBed.inject(QuestionService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be initialized with default state', () => {
    expect(service).toBeTruthy();
  });

  it('should call get questions and return an array', () => {
    service.getQuestions().subscribe((res) => {
      expect(res).toEqual(questionsMock);
    });

    const req = httpController.expectOne({ method: 'GET', url: `${url}/data` });

    req.flush(questionsMock);
  });

});
