import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LanguageService {

  private languages = [];

  public getLanguages() {
    return this.languages;
  }

  constructor(
    private http: HttpClient
  ) { }

  load() {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/config/language.json').subscribe(result => {
        this.languages = result['languages'];
        resolve(true);
      });
    });
  }

}
