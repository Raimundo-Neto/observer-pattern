import { Subscriber } from "../interfaces/subscriber";
import { ObserverController } from "../observer/observerController";

export  class SubscriberController implements Subscriber {

    observerController: ObserverController;

    constructor() {

        this.observerController = new ObserverController();
       

    }

    subscribe(){

        this.observerController.insertSubscriber(this);

    }
    
    update(value: any) {
        return value;
    }




}
