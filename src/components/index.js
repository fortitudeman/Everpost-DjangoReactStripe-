import Element from './Element';

const CardNumberElement = Element('cardNumber', {
    impliedTokenType: 'card',
    impliedSourceType: 'card',
    impliedPaymentMethodType: 'card',
});

const CardExpiryElement = Element('cardExpiry');
const CardCvcElement = Element('cardCvc');
export {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
}