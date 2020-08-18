import PropTypes from 'prop-types';
export const elementContextTypes = {
    addElementsLoadListener: PropTypes.func.isRequired,
    registerElement: PropTypes.func.isRequired,
    unregisterElement: PropTypes.func.isRequired,
};

export type ElementContext = {
    addElementsLoadListener: (ElementsLoadListener) => void,
    registerElement: (
      element: ElementShape,
      impliedTokenType: ?string,
      impliedSourceType: ?string,
      impliedPaymentMethodType: ?string
    ) => void,
    unregisterElement: (element: ElementShape) => void,
};