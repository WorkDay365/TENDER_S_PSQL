import { makeAutoObservable } from "mobx";

export default class TenderStore {
  constructor() {
    this._typesTender = [];
    this._tenders = [];
    this._selectedTypeTender = {};
    makeAutoObservable(this);
  }

  setTypesTender(typesTender) {
    this._typesTender = typesTender;
  }

  setTender(tenders) {
    this._tenders = tenders;
  }

  setSelectedTypeTender(typeTender) {
    this._selectedTypeTender = typeTender;
  }

  get typesTender() {
    return this._typesTender;
  }

  get tenders() {
    return this._tenders;
  }

  get selectedTypeTender() {
    return this._selectedTypeTender;
  }
}
