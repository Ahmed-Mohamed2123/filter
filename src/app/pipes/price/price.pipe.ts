import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(product: any[], searchTerm: string): any {
    if (!product || !searchTerm) {
      return product;
    }
    return product.filter(
      (prod) =>
        prod.price.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
