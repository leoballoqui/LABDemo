import { Component, HostListener  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppToolbarService, MenuItem } from './app-toolbar/app-toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appName = 'Participants';
  mainMenuItems;
  activeMenuItem$: Observable<MenuItem>;
  isDarkTheme = true;

  constructor(private toolbarService: AppToolbarService) {
      this.mainMenuItems = this.toolbarService.getMenuItems();
      this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
  }

  // @HostListener("window:onbeforeunload",["$event"])
  //   clearLocalStorage(event){
  //     alert("Leo");
  //       localStorage.clear();
  //   }
    @HostListener('window:beforeunload')
    doSomething() {
      alert("Leo");
    }

}
