
import { Subscriber } from './subscriber';

export interface Observer {
  // @ts-ignore
     _subscribers :Array<Subscriber>;
    // @ts-ignore
    insertSubscriber(O: Subscriber): void;
    // @ts-ignore
    removeSubscriber(O: Subscriber): void;
    // @ts-ignore
    notifySubscriber(value: any): void;

}