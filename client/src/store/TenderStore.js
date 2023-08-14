import { makeAutoObservable } from "mobx";

export default class TenderStore {
    constructor() {
        this.__types_tender = [
            {id: 1 , title: 'Aqva' , type_description: 'sdfwdsgsgdsgdfg2342'   },
            {id: 2 , title: 'Build', type_description: '23 df  efger g dfgdfg '},
        ]
        this._tenders = [
             {id: 8,  name: "AAAAA_7",  img: null,	                                     tender_description: "3fghfghgfhfgh", tender_status: 7, userId: 2,	typeTenderId: 2},
             {id: 9,  name: "AAAAA_79", img: null,	                                     tender_description: "3fghfghgfhfgh", tender_status: 7,	userId: 2,	typeTenderId: 2},
             {id: 10, name: "BBB_72",   img: null,	                                     tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2},
             {id: 11, name: "BBB_72",   img: "093a65c5-13f8-4dc7-9e5f-7f9a477fc70d.jpg"	,tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2},
        ]
        makeAutoObservable(this)
    }

    setTypesTender(typesTender) {
        this._typesTender = typesTender
    }

    setTenderes(tenders) {
        this._tenders = tenders
    }

    get typesTender() {
        return this._typesTender
    }

    get tenders() {
        return this._tenders
    }
}