import { ObserverController } from "./observer/observerController";
import { SubscriberController } from "./subscribers/subscriberController";

export class TermometroSubscriber extends SubscriberController {




    update(value: any): void {
        console.log('foi subscrito' + value);
    }






}


















export class MeterologiaObserver extends ObserverController {

    setTemperatura(temp: number) {

        console.log(' a meterologia calculou a temperatura' + temp);

        this.notifySubscriber(temp);
    }


}


let fonte = new MeterologiaObserver();
let jornal = new TermometroSubscriber();
fonte.setTemperatura(80);
fonte.setTemperatura(80);