import { Observer } from "../interfaces/observer";
import { Subscriber } from "../interfaces/subscriber";

// @ts-ignore
export class ObserverController implements Observer {

    protected  _subscribers = [];


    insertSubscriber(O: Subscriber): void {

        // @ts-ignore
        this._subscribers.push(O);

    }
    removeSubscriber(O: Subscriber): void {
        // @ts-ignore
        let index = this._subscribers.indexOf(O);
        this._subscribers.splice(index, 1);
    }
    notifySubscriber(value: any = undefined): void {

        this._subscribers.forEach((subscriber) => {
            // @ts-ignore
            subscriber.update(value);

        });
    }
}