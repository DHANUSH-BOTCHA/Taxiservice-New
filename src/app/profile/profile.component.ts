import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../types/user';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: Router) { }

  user = JSON.parse(localStorage.getItem('user')||'{}' ) as User

  ngOnInit(): void {
  
  }

}
