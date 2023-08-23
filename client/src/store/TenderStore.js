import { makeAutoObservable } from "mobx";

export default class TenderStore {
  constructor() {
    this._typesTender = [];
    this._tenders = [];
    this._selectedTypeTender = {};

    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;

    makeAutoObservable(this);
  }

  setTypesTender(typesTender) {
    this._typesTender = typesTender;
  }

  setTender(tenders) {
    this._tenders = tenders;
  }

  setSelectedTypeTender(typeTender) {
    this.setPage(1);
    this._selectedTypeTender = typeTender;
  }

  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
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

  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
