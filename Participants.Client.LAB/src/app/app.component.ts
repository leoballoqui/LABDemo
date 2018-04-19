import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppToolbarService, MenuItem } from './app-toolbar/app-toolbar.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from './dialogs/dialogs.service';
import { CommonService } from './common/common.service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'app';
  appName = 'Participants';
  mainMenuItems;
  activeMenuItem$: Observable<MenuItem>;
  isDarkTheme = true;
  isAuth: boolean = false;
  subscription: Subscription;

  constructor(private toolbarService: AppToolbarService,
    private router: Router,
    private dialogsService: DialogsService,
    private commonService: CommonService) {
      this.resolveMenuItems();
      window.addEventListener("beforeunload", function (e) {
        //localStorage.clear();
        //console.log("unloaded")
        return null;
      });
  }

  ngOnInit() {
    this.isAuth = this.commonService.isAuthorized();
    this.subscription = this.commonService.notifier().subscribe(value => 
      {
        this.isAuth = value;
        this.resolveMenuItems();
      });
  }

  resolveMenuItems() {
    this.mainMenuItems = this.toolbarService.getMenuItems();
    this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
  }

  confirmLogout() {
    this.dialogsService
    .confirm('Please Confirm', 'Are you sure you want to log out?')
    .subscribe(res => 
      {
        if(res == true)
          this.router.navigate(['/logout']);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
