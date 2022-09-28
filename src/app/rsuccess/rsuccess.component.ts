import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsuccess',
  templateUrl: './rsuccess.component.html',
  styleUrls: ['./rsuccess.component.css']
})
export class RsuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToPage(){
    this.router.navigate(['medicare'])
  }
}
