import { DeleteComponent } from './Components/delete/delete.component';
import { CreateComponent } from './Components/create/create.component';
import { EditComponent } from './Components/edit/edit.component';
import { ViewComponent } from './Components/view/view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'view', component: ViewComponent},
  {path:'edit', component: EditComponent},
  {path:'create', component: CreateComponent},
  {path:'delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
