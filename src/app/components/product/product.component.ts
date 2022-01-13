/**
 * js跳转路由
 *  1、动态路由
 *    1)引入并声明模块
 *      import { Router } from '@angular/router';
 *      constructor(public router:Router) { }
 * 
 *    2)跳转
 *      this.router.navigate(['/productcontent','666']);
 *      this.router.navigate(['/home']);
 * 
 *  2、get传值
 *    1)引入并声明模块
 *      import { Router, NavigationExtras } from '@angular/router';
 *      constructor(public router:Router) { }
 * 
 *    2)跳转
 *      this.router.navigate(['/news'],{
 *      queryParams:{'aid':888}
 *  });
 * 
 * 
 */
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  getProductContent(){
    //路由跳转 (普通路由和动态路由)
    this.router.navigate(['/productcontent','666']);
  }

  goHome(){
    //普通路由
    this.router.navigate(['/home']);
  }

  goNews(){
    let queryParam:NavigationExtras={
      queryParams:{'aid':888}
    };
    this.router.navigate(['/news'],queryParam);
  }

}
