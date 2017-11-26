import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReversePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe {
  transform (values) {
    if (values) {
      return values.reverse();
    }
  }
}