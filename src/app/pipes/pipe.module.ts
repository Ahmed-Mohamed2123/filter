import { ProductFilterPipe } from './price/price.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductFilterPipe],
  imports: [CommonModule],
  exports: [ProductFilterPipe],
})
export class PipeModule {}
