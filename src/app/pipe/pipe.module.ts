import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { SearchingFilterPipe } from './searching-filter.pipe';
import { SearchingPhimFilterPipe } from './searching-phim-filter.pipe';


@NgModule({
  declarations: [SafePipe, SearchingFilterPipe, SearchingPhimFilterPipe],
  imports: [
    CommonModule
  ],
  exports:[SafePipe,  SearchingFilterPipe, SearchingPhimFilterPipe]
})
export class PipeModule { }
