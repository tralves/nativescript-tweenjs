import { Observable, EventData } from "tns-core-modules/data/observable";
import { TWEEN } from "nativescript-tweenjs";

export class HelloWorldModel extends Observable {
  public message: string;
  public bunjee: number;

  constructor() {
    super();

    this.message = "0";
    this.bunjee = 0;
  }

  onTap(args: EventData) {
    var tween = new TWEEN.Tween({ x: 50, y: 0 })
      .to({ x: 400 }, 5000)
      .easing(TWEEN.Easing.Elastic.InOut)
      .onUpdate(object => {
        this.set("btnWidth", object.x);
      })
      .start();
  }
}
