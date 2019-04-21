import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchingFilter'
})
export class SearchingFilterPipe implements PipeTransform {
  
  transform(danhSachNguoiDung= [], searchTerm: string): any {
    if(!danhSachNguoiDung || !searchTerm){
      return danhSachNguoiDung;
    }
    return danhSachNguoiDung.filter(item =>item.TaiKhoan === searchTerm);
  }

  

}
