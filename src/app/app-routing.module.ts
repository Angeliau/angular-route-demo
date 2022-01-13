//配置路由的模块
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//引入组件
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { DynamicrouteComponent } from './components/dynamicroute/dynamicroute.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';

//配置动态路由
const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'newscontent',component:NewscontentComponent
  },
  {
    //动态路由配置
    path:'dynamicroute/:aid',component:DynamicrouteComponent
  },
  {
    path:'productcontent/:pid',component:ProductcontentComponent
  },
  {
    //匹配不到路由的时候加载的组件
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
