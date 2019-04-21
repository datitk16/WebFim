import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchingPhimFilter'
})
export class SearchingPhimFilterPipe implements PipeTransform {

  transform(danhSachPhim=[], searchTerm: string): any {
    if(!danhSachPhim || !searchTerm){
      return danhSachPhim;
    }
    return danhSachPhim.filter( item =>
      item.TenPhim.toLowerCase().indexOf(searchTerm.toLowerCase().trim()) != -1
    );
  }

}
