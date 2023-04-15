import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private _snackbarMessage$ = new Subject<string>();

  public snackbarMessage$ = this._snackbarMessage$.asObservable();

  dispatch(message : string) {
    this._snackbarMessage$.next(message);
  }
 
}
