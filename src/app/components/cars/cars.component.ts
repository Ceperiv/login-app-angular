import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {map} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";

import {ICar, IPaginatedData} from "../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, AfterViewInit {
  cars: ICar[];
  total_items: number

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private detectorRef:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // this.carService.getAll().subscribe(value => this.cars = value.data)
    this.activatedRoute.data.pipe(
      map(value => value['data'] as IPaginatedData<ICar>)
    ).subscribe((value) => {
      this.total_items = value.total_items
      this.cars = value.data;

    })


  }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(({page})=>{
      this.paginator.pageIndex = page - 1
      this.detectorRef.detectChanges()
    })
    this.paginator.page.subscribe((page) => {
      this.router.navigate([], {queryParams: {page: page.pageIndex + 1}})
    })
  }

}
