import { Injectable } from '@nestjs/common';

@Injectable()
export class MyStore {
  protected user = [];
  constructor() {
    console.log('init my store');
  }
}
