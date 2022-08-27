import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //! DECORATOR
  name: 'sorteAge'
})
export class SorteAgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      console.log(value)
      // return value.filter( (item:any) => item.age>25 )
      return value.sort( (a:any,b:any) => a.age-b.age )
  }

}
