import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './category';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  
  title= 'Kategori Listesi'
  categories!:Category[];

  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data
    });
  }

}
