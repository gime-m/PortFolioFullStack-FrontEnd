import { Component, OnInit} from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError,} from '@angular/router';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Gimena Martín - Portfolio';
  
  ngOnInit(): void {}

  constructor(private router: Router, public loading: LoadingService) {
    this.router.events.subscribe((e : RouterEvent) => {
      setTimeout(() => {
        this.navigationInterceptor(e);
      })})
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading.navigationLoading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading.navigationLoading = false;
    }
    if (event instanceof NavigationCancel) {
      this.loading.navigationLoading = false;
    }
  }
}

