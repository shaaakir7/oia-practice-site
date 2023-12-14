import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oia_con';


  showDropdownContent: boolean = false;

  toggleDropdown() {
    this.showDropdownContent = !this.showDropdownContent;
  }


  // isDrawerOpened = true;
  // // visible: boolean = false;

  // toggleDrawer() {
  //     this.isDrawerOpened = !this.isDrawerOpened;
  // }

  // open() {
  //     this.visible = !this.visible;
  // }


  isDrawerOpened = true;
  XsScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((result) => {
      this.XsScreen = result.matches;
      // If it's an extra small screen, close the drawer
      if (this.XsScreen) {
        this.isDrawerOpened = false;
      }
    });   
  }
}
