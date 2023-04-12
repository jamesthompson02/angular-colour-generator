import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomRxjsService {
  private _hexIds$ = new Subject<string>();

  public hexIds$ = this._hexIds$.asObservable();

  public dispatch(hexID : string) {
    console.log('dispatch');
   this._hexIds$.next(hexID);
  }
}
