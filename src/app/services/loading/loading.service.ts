import { Injectable } from '@angular/core';
export let browserRefresh = false;

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _navigationLoading: boolean = false;
  public get navigationLoading(): boolean {
    return this._navigationLoading;
  }
  public set navigationLoading(value: boolean) {
    this._navigationLoading = value;
  }

  private _imagesLoading: number = 0;
  public get imagesLoading(): number {
    return this._imagesLoading;
  }
  public set imagesLoading(value: number) {
    this._imagesLoading = value;
  }

  private _requests: number = 0;
  public get requests(): number {
    return this._requests;
  }
  public set requests(value: number) {
    this._requests = value;
  }
}
