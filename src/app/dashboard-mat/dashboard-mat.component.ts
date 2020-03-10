import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import {forkJoin} from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import User from '../model/user.model';
import {UserService} from '../services/user/user.service';
import {FileService} from '../services/file/file.service';

@Component({
  selector: 'app-dashboard-mat',
  templateUrl: './dashboard-mat.component.html',
  styleUrls: ['./dashboard-mat.component.scss']
})
export class DashboardMatComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */



  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //       return [
  //         { title: 'Bienvenue', cols: 1, rows: 1 },
  //         { title: 'Documents', cols: 1, rows: 1 },
  //         { title: 'À la une', cols: 2, rows: 1 }
  //       ];
  //   })
  // );


  public file: any = {};
  public cards: any;
  currentUser: User = {} as any;

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService, private fileService: FileService) {
  }

  ngOnInit(): void {
    // forkJoin(
    //   this.userService.getCurrentUser(),
    //   this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    //     map(({ matches }) => {
    //       return [
    //         { title: 'Bienvenue', cols: 1, rows: 1 },
    //         { title: 'Documents', cols: 1, rows: 1 },
    //         { title: 'À la une', cols: 2, rows: 1 }
    //       ];
    //     })
    //   ),
    //   this.fileService.getAllFiles()
    // ).subscribe(([ user, cards, files]) => {
    //   this.currentUser = user;
    //   this.cards = cards;
    //   this.file = files;
    // });
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        return [
          { title: 'Bienvenue', cols: 1, rows: 1 },
          { title: 'Documents', cols: 1, rows: 1 },
          { title: 'À la une', cols: 2, rows: 1 }
        ];
      })
    ).subscribe(cards => {
      this.cards = cards;
    });
    this.fileService.getAllFiles().subscribe(files => {
      this.file = files[files.length - 1];
    });
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }
}
