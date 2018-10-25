import * as observable from 'tns-core-modules/data/observable'
import * as pages from 'tns-core-modules/ui/page'
import { HelloWorldModel } from './main-view-model'

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object
  page.bindingContext = new HelloWorldModel()

  var tween = new TWEEN.Tween({ x: 50 })
    .to({ x: 400 }, 5000)
    .easing(TWEEN.Easing.Elastic.InOut)
    .onUpdate(function(object) {
      page.bindingContext.set('message', Math.round(object.x))
      page.bindingContext.set('bungee', object.x)
    })
    .start()
}
