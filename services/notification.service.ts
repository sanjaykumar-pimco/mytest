import { Injectable, NgZone } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatSnackBar } from '@angular/material/snack-bar';
import {MessageService} from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

  constructor( private messageService: MessageService ) { }

  showSuccess(message: string): void {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: message});
  }

  showError(message: string): void {
    this.messageService.add({severity: 'error', summary: 'Service Message', detail: message});
  }
}
