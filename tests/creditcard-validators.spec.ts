import {CreditCardValidators} from '../src/creditcard-validators';
import {Control} from '@angular/common';
import {americanexpress, visa, dinersclub, discover, jcb, maestro, mastercard} from './creditcards/creditcards'

export function main() {

    describe('CreditCardValidators', () => {


        describe('creditcard', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = CreditCardValidators.isCreditCard()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for creditcard number (americanExpress)', () => {
                americanexpress.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.isCreditCard()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for creditcard number (visa)', () => {
                visa.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.isCreditCard()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for creditcard number (dinersclub)', () => {
                dinersclub.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.isCreditCard()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for creditcard number (discover)', () => {
                discover.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.isCreditCard()(control);
                    expect(validated).toBeUndefined();
                });
            });


            it('should work for creditcard number (jcb)', () => {
                jcb.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.isCreditCard()(control);
                    expect(validated).toBeUndefined();
                });
            });


            it('should work for creditcard number (maestro)', () => {
                maestro.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.isCreditCard()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for creditcard number (mastercard)', () => {
                mastercard.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.isCreditCard()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for wrong creditcard number 1', () => {
                let control: Control = new Control('478282246310005');
                let validated = CreditCardValidators.isCreditCard()(control);
                expect(validated).toEqual({ 'creditcard': true });
            });

            it('should work for wrong creditcard number 2', () => {
                let control: Control = new Control('478282246310005 foo');
                let validated = CreditCardValidators.isCreditCard()(control);
                expect(validated).toEqual({ 'creditcard': true });
            });

            it('should work for wrong creditcard number 3', () => {
                let control: Control = new Control('378282246');
                let validated = CreditCardValidators.isCreditCard()(control);
                expect(validated).toEqual({ 'creditcard': true });
            });

        });


        describe('americanExpress', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = CreditCardValidators.americanExpress()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for americanExpress number', () => {
                americanexpress.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.americanExpress()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for wrong americanExpress number 1', () => {
                let control: Control = new Control('478282246310005');
                let validated = CreditCardValidators.americanExpress()(control);
                expect(validated).toEqual({ 'americanExpress': true });
            });

            it('should work for wrong americanExpress number 2', () => {
                let control: Control = new Control('478282246310005 foo');
                let validated = CreditCardValidators.americanExpress()(control);
                expect(validated).toEqual({ 'americanExpress': true });
            });

            it('should work for wrong americanExpress number 3', () => {
                let control: Control = new Control('378282246');
                let validated = CreditCardValidators.americanExpress()(control);
                expect(validated).toEqual({ 'americanExpress': true });
            });

        });

        describe('visa', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = CreditCardValidators.visa()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for visa number', () => {
                visa.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.visa()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for wrong visa number 1', () => {
                let control: Control = new Control('401288888888188');
                let validated = CreditCardValidators.visa()(control);
                expect(validated).toEqual({ 'visa': true });
            });

            it('should work for wrong visa number 2', () => {
                let control: Control = new Control('4012888888881881 foo');
                let validated = CreditCardValidators.visa()(control);
                expect(validated).toEqual({ 'visa': true });
            });

            it('should work for wrong visa number 3', () => {
                let control: Control = new Control('301288');
                let validated = CreditCardValidators.visa()(control);
                expect(validated).toEqual({ 'visa': true });
            });

        });

        describe('dinersclub', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = CreditCardValidators.dinersclub()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for dinersclub number', () => {
                dinersclub.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.dinersclub()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for wrong dinersclub number 1', () => {
                let control: Control = new Control('401288888888188');
                let validated = CreditCardValidators.dinersclub()(control);
                expect(validated).toEqual({ 'dinersclub': true });
            });

            it('should work for wrong dinersclub number 2', () => {
                let control: Control = new Control('4012888888881881 foo');
                let validated = CreditCardValidators.dinersclub()(control);
                expect(validated).toEqual({ 'dinersclub': true });
            });

            it('should work for wrong dinersclub number 3', () => {
                let control: Control = new Control('301288');
                let validated = CreditCardValidators.dinersclub()(control);
                expect(validated).toEqual({ 'dinersclub': true });
            });

        });

        describe('discover', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = CreditCardValidators.discover()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for discover number', () => {
                discover.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.discover()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for wrong discover number 1', () => {
                let control: Control = new Control('401288888888188');
                let validated = CreditCardValidators.discover()(control);
                expect(validated).toEqual({ 'discover': true });
            });

            it('should work for wrong discover number 2', () => {
                let control: Control = new Control('4012888888881881 foo');
                let validated = CreditCardValidators.discover()(control);
                expect(validated).toEqual({ 'discover': true });
            });

            it('should work for wrong discover number 3', () => {
                let control: Control = new Control('301288');
                let validated = CreditCardValidators.discover()(control);
                expect(validated).toEqual({ 'discover': true });
            });

        });

        describe('jcb', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = CreditCardValidators.jcb()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for jcb number', () => {
                jcb.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.jcb()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for wrong jcb number 1', () => {
                let control: Control = new Control('401288888888188');
                let validated = CreditCardValidators.jcb()(control);
                expect(validated).toEqual({ 'jcb': true });
            });

            it('should work for wrong jcb number 2', () => {
                let control: Control = new Control('4012888888881881 foo');
                let validated = CreditCardValidators.jcb()(control);
                expect(validated).toEqual({ 'jcb': true });
            });

            it('should work for wrong jcb number 3', () => {
                let control: Control = new Control('301288');
                let validated = CreditCardValidators.jcb()(control);
                expect(validated).toEqual({ 'jcb': true });
            });

        });

        describe('maestro', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = CreditCardValidators.maestro()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for maestro number', () => {
                maestro.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.maestro()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for wrong maestro number 1', () => {
                let control: Control = new Control('401288888888188');
                let validated = CreditCardValidators.maestro()(control);
                expect(validated).toEqual({ 'maestro': true });
            });

            it('should work for wrong maestro number 2', () => {
                let control: Control = new Control('4012888888881881 foo');
                let validated = CreditCardValidators.maestro()(control);
                expect(validated).toEqual({ 'maestro': true });
            });

            it('should work for wrong maestro number 3', () => {
                let control: Control = new Control('301288');
                let validated = CreditCardValidators.maestro()(control);
                expect(validated).toEqual({ 'maestro': true });
            });

        });

        describe('mastercard', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = CreditCardValidators.mastercard()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for mastercard number', () => {
                mastercard.forEach(element => {
                    let control: Control = new Control(element);
                    let validated = CreditCardValidators.mastercard()(control);
                    expect(validated).toBeUndefined();
                });
            });

            it('should work for wrong mastercard number 1', () => {
                let control: Control = new Control('401288888888188');
                let validated = CreditCardValidators.mastercard()(control);
                expect(validated).toEqual({ 'mastercard': true });
            });

            it('should work for wrong mastercard number 2', () => {
                let control: Control = new Control('4012888888881881 foo');
                let validated = CreditCardValidators.mastercard()(control);
                expect(validated).toEqual({ 'mastercard': true });
            });

            it('should work for wrong mastercard number 3', () => {
                let control: Control = new Control('301288');
                let validated = CreditCardValidators.mastercard()(control);
                expect(validated).toEqual({ 'mastercard': true });
            });

        });
    });
}