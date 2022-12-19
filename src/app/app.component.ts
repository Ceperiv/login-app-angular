import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: []
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.dialog.closeAll()
      }
    })
  }

}
