import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Cab } from '../types/cab';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css'],
})
export class RideComponent implements OnInit {
  ride: Cab;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.ride = {
      cabname: 'XLYO',
      cabloc: 'NIT RAIPUR',
      cabdes: 'Airport',
      src: 'https://cdn.autoportal.com/img/new-cars-gallery/mahindra/xylo/exterior/mahindra-xylo-d56fee5.jpg',
      price: 7000,
      id: 1,
      carno: 'CG 04 AB 1998',
      carcom: 'Mahindra(2018 Model)',
      carty: 'Rover(7 Seater)',
      driver: 'Mr.Sunil Kumar Singh',
      driverno: 12345678,
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.http
        .get<any>('http://localhost:3000/cabs/' + params.get('id'))
        .subscribe((res) => {
          this.ride = res;
        });
    });
  }
}
