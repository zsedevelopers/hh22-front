import { Component, OnInit } from '@angular/core';
import IdentityCardDto from 'src/app/core/models/digital documents/identity-card-dto';
import WalletDto from 'src/app/core/models/digital documents/wallet-dto';
import { AuthService } from 'src/app/core/services/auth.service';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from 'src/app/popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-show-documents',
  templateUrl: './show-documents.component.html',
  styleUrls: ['./show-documents.component.scss'],
})
export class ShowDocumentsComponent implements OnInit {
  hasWallet: boolean = false;
  wallet: WalletDto | null = null;

  constructor(
    private documentService: DigitalDocumentService,
    public router: Router,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      backdropClass: 'dialog-backdrop',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    this.documentService
      .getWallet()
      .pipe(
        catchError((err) => {
          // alert('you have to be logged in to access this feature');
          // this.router.navigate(['/']);
          this.openDialog();
          return throwError(err);
        })
      )
      .subscribe((data) => {
        if (data != null) {
          this.wallet = data;
          this.hasWallet = true;
        }
      });
  }
}
