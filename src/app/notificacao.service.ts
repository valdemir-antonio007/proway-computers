import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) { }

showMessage(msg: string, isError: boolean = false){
     this.snackBar.open(msg, "OK", {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? 'msg-error' : 'msg-success'
     })
}

}
