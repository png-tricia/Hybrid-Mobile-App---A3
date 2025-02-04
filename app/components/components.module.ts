import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [C1Component, C2Component],
  imports: [CommonModule, IonicModule, FormsModule, HttpClientModule],
  exports: [C1Component, C2Component],
})
export class ComponentsModule {}
