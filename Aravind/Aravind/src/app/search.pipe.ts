import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchTerm: string, s: string): any {
    console.log(data);
    console.log("s value" + "   " + s);
    if (!data || !searchTerm) {
      return data;
    } else if (s == "price") {
      return data.filter(x => x.price.indexOf(searchTerm) !== -1);
    } else {
      return data.filter(
        x => x['selectbg'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }
  }
}
