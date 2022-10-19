import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../types/user';

@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.css']
})
export class OpeningPageComponent implements OnInit {
  
  constructor(private route: Router) { }

   user = JSON.parse(localStorage.getItem('user')||'{}' ) as User
  ngOnInit(): void {
  }

}
