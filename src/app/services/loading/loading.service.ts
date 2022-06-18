import { Injectable } from '@angular/core';
export let browserRefresh = false;

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _isLoading: boolean = false;
  public get isLoading(): boolean {
    return this._isLoading;
  }
  public set isLoading(value: boolean) {
    this._isLoading = value;
  }

  imagesLoading: number = 0
}
