import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private baseUrl = 'http://localhost:8080/api/formData';

  constructor(private http: HttpClient) {}

  private formData: any = {};

  setFormData(data: any) {
    this.formData = { ...this.formData, ...data };
  }

  getFormData() {
    return this.formData;
  }

  resetFormData() {
    this.formData = {};
  }
  //database
  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
  getActionByRef(ref: string): Observable<any> {
    const params = new HttpParams().set(
      'timestamp',
      new Date().getTime().toString()
    );
    return this.http.get(`${this.baseUrl}/action/${ref}`, { params });
  }
  updateFormData(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${data.ref}`, data);
  }
}
