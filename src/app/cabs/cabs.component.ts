import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cab } from '../types/cab';
// import { cab } from 'types/cab';

@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css'],
})
export class CabsComponent implements OnInit {
  cabs: Cab[] = [];

  constructor(private route: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/cabs/').subscribe((res) => {
      this.cabs = res;
    });
  }
}
