import { Observable } from 'tns-core-modules/data/observable'
// import { Tweenjs } from 'nativescript-tweenjs';
require('nativescript-tweenjs')

export class HelloWorldModel extends Observable {
  public message: string
  public bunjee: number
  // private tweenjs: Tweenjs;

  constructor() {
    super()

    this.message = '0'
    this.bunjee = 0
  }
}
