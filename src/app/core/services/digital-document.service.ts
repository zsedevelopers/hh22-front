import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CreateIdentityCardDto from '../models/digital documents/create-identity-card-dto';
import CreatePassportDto from '../models/digital documents/create-passport-dto';
import WalletDto from '../models/digital documents/wallet-dto';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DigitalDocumentService {
  
  wallet: WalletDto | null = null;
  
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {
    if (authService.isLogged()) {
      this.getWallet().subscribe((data: WalletDto) => {
        this.wallet = data;
      });
    }
  }

  createWallet(): Observable<HttpResponse<null>> {
    return this.apiService.createWallet(this.authService.getJwt()!);
  }

  getWallet(): Observable<WalletDto> {
    return this.apiService.getWallet(this.authService.getJwt()!);
  }
  
  private refreshWallet(){
    this.apiService.getWallet(this.authService.getJwt()!).subscribe(data => this.wallet)
  }

  addIdentityCard(data: CreateIdentityCardDto): Observable<HttpResponse<null>> {
    return this.apiService.addIdentityCard(data, this.authService.getJwt()!);
  }
  addPassport(data: CreatePassportDto): Observable<HttpResponse<null>> {
    return this.apiService.addPassport(data, this.authService.getJwt()!);
  }
}
