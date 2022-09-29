import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puroduct-listing',
  templateUrl: './puroduct-listing.component.html',
  styleUrls: ['./puroduct-listing.component.scss']
})
export class PuroductListingComponent implements OnInit {
    products:any = [1, 2, 3, 4]
  constructor() { }

  ngOnInit(): void {
  }

}
