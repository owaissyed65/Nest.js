import { Injectable } from '@nestjs/common';

@Injectable()
export class UserStore {
  protected user = [];
  constructor() {
    console.log('Init user Store');
  }
}
