import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  id: string | null ='';
  product = '';
  constructor (private route:ActivatedRoute){}
  ngOnInit(): void {
      this.id=this.route.snapshot.paramMap.get('id');
      this.product = "product Id is :" + this.id;

  }


}
