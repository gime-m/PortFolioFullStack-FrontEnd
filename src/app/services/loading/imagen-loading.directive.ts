import { Directive, ElementRef } from '@angular/core';
import { first, fromEvent } from 'rxjs';
import { LoadingService } from './loading.service';

@Directive({
  selector: 'img'
})
export class ImgLoadedDirective {
  constructor(private el: ElementRef,
    private loadServ: LoadingService) {

    //loadServ.imageLoading(el.nativeElement);
  }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'load')
      .pipe(first())
      .subscribe(() => this.loadServ.imagesLoading--)
    
    this.loadServ.imagesLoading++;
  }
} 

