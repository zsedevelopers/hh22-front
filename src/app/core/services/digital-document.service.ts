import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CreateIdentityCardDto from '../models/digital documents/create-identity-card-dto';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DigitalDocumentService {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  createWallet(): Observable<HttpResponse<null>> {
    return this.apiService.createWallet(this.authService.getJwt()!);
  }
  addIdentityCard(data: CreateIdentityCardDto): Observable<HttpResponse<null>> {
    return this.apiService.addIdentityCard(data, this.authService.getJwt()!);
  }
}
