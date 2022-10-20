import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CreateDriverLicenceDto from '../models/digital documents/create-driver-licence-dto';
import CreateIdentityCardDto from '../models/digital documents/create-identity-card-dto';
import CreatePassportDto from '../models/digital documents/create-passport-dto';
import DocumentEntityDto from '../models/digital documents/document-entity-dto';
import VerifyDocumentDto from '../models/digital documents/verifyDocumentDto';
import WalletDto from '../models/digital documents/wallet-dto';
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

  getWallet(): Observable<WalletDto> {
    return this.apiService.getWallet(this.authService.getJwt()!);
  }

  addIdentityCard(data: CreateIdentityCardDto): Observable<HttpResponse<null>> {
    return this.apiService.addIdentityCard(data, this.authService.getJwt()!);
  }

  addPassport(data: CreatePassportDto): Observable<HttpResponse<null>> {
    return this.apiService.addPassport(data, this.authService.getJwt()!);
  }

  addDriverLicence(
    data: CreateDriverLicenceDto
  ): Observable<HttpResponse<null>> {
    return this.apiService.addDriverLicence(data, this.authService.getJwt()!);
  }

  getUnverifiedDocuments(): Observable<DocumentEntityDto[]> {
    return this.apiService.getUnverifiedDocuments(this.authService.getJwt()!);
  }

  getVerifiedDocuments(): Observable<DocumentEntityDto[]> {
    return this.apiService.getVerifiedDocuments(this.authService.getJwt()!);
  }

  verifyDocument(data:VerifyDocumentDto){
    return this.apiService.verifyDocument(data, this.authService.getJwt()!)
  }
}
