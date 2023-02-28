import { Popup } from "./popup.js";

export class PopupCatDescription extends Popup {
    constructor(className){
        super(className);
    }

    open(dataImage,dataName,dataDescription) {
        const imagePopup = this._popupElement.querySelector('.popup__image');
        imagePopup.src = dataImage;

        const namePopup = this._popupElement.querySelector('.popup__name');
        namePopup.textContent = dataName;

        const descriptionPopup = this._popupElement.querySelector('.popup__description');
        descriptionPopup.textContent = dataDescription;

        super.open();
    }
}