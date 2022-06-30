import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core';
import { first, fromEvent } from 'rxjs';
import { LoadingService } from './loading.service';

@Directive({
  selector: 'img'
})
export class ImgLoadedDirective {
  constructor(private el: ElementRef, private cd: ChangeDetectorRef, private loadServ: LoadingService) {
    this.loadServ.imagesLoading++;
    fromEvent(this.el.nativeElement, 'load').pipe(first()).subscribe(() => {
      this.loadServ.imagesLoading--;
    })
  }

  ngOnInit() { }
} 

