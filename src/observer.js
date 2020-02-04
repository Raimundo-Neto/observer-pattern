"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var SubscriberController = /** @class */ (function () {
    function SubscriberController() {
        console.log('foi no construtor');
        this.observerController = new ObserverController();
        this.observerController.registrarSubscriber(this);
    }
    SubscriberController.prototype.update = function (value) {
    };
    return SubscriberController;
}());
exports.SubscriberController = SubscriberController;
var TermometroSubscriber = /** @class */ (function (_super) {
    __extends(TermometroSubscriber, _super);
    function TermometroSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TermometroSubscriber.prototype.update = function (value) {
        console.log('foi subscrito' + value);
    };
    return TermometroSubscriber;
}(SubscriberController));
exports.TermometroSubscriber = TermometroSubscriber;
// @ts-ignore
var ObserverController = /** @class */ (function () {
    function ObserverController() {
    }
    ObserverController.prototype.registrarSubscriber = function (O) {
        console.log('registrando' + O);
        // @ts-ignore
        ObserverController._observadores.push(O);
        console.log('inserido' + ObserverController._observadores.length);
    };
    ObserverController.prototype.removerSubscriber = function (O) {
        // @ts-ignore
        var index = this.observadores.indexOf(O);
        ObserverController._observadores.splice(index, 1);
    };
    ObserverController.prototype.notificaSubscriber = function (value) {
        if (value === void 0) { value = undefined; }
        console.log('observadores' + ObserverController._observadores.length);
        ObserverController._observadores.forEach(function (observador) {
            console.log('o observador é' + observador);
            // @ts-ignore
            observador.update(value);
        });
    };
    ObserverController._observadores = [];
    return ObserverController;
}());
exports.ObserverController = ObserverController;
var Meterologia = /** @class */ (function (_super) {
    __extends(Meterologia, _super);
    function Meterologia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Meterologia.prototype.setTemperatura = function (temp) {
        console.log(' a meterologia calculou a temperatura' + temp);
        this.notificaSubscriber(temp);
    };
    return Meterologia;
}(ObserverController));
exports.Meterologia = Meterologia;
var fonte = new Meterologia();
var jornal = new TermometroSubscriber();
fonte.setTemperatura(80);
fonte.setTemperatura(80);
