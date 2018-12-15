import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEditor'
})
export class TextEditorPipe implements PipeTransform {
  transform(text: string, args?: Map<string, string>): string {
    args.forEach((value, key) => {
      text = text.replace(key, `<span class="phone-number">${value}</span>`);
    });
    return text;
  }
}
