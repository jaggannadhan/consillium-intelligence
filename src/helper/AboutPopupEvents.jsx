import { Subject } from "rxjs";

export default class AboutPopupEvents {
  constructor() {
    this.events = new Subject();
  }

  emitEvent(params) {
    console.log(`params: ${JSON.stringify(params)}`);
    this.events.next(params);
  }

  eventsObservable() {
    return this.events.asObservable();
  }
}
