import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const Products of value){
      if(Products.name.toLowerCase().includes(arg.toLowerCase())){
        resultPost.push(Products);
      }else if(Products.description.toLowerCase().includes(arg.toLowerCase())){
        resultPost.push(Products);
      }else if(Products.price == arg){
        resultPost.push(Products);
      }else if(Products.lot == arg){
        resultPost.push(Products);
      }else if(Products.cod_Products == arg){
        resultPost.push(Products);
      }else{
        console.log("Don't found")
      }
    }
    return resultPost;

  }

}
