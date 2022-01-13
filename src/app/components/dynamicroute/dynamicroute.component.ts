import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamicroute',
  templateUrl: './dynamicroute.component.html',
  styleUrls: ['./dynamicroute.component.css']
})
export class DynamicrouteComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    //获取动态路由传值
    this.route.params.subscribe((data)=>{
      console.log(data);
    });
  }

}
