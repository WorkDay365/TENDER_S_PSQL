import { makeAutoObservable } from "mobx";

export default class TenderStore {
  constructor() {
    this._typesTender = [
      // {id: 1 , title: 'Aqva'   },
      // {id: 2 , title: 'Build'  },
      // {id: 3 , title: 'Aqva'   },
      // {id: 4 , title: 'Build'  },
      // {id: 5 , title: 'Aqva'   },
      // {id: 6 , title: 'Build'  },
      // {id: 7 , title: 'Aqva'   },
      // {id: 8 , title: 'Build'  },
      // {id: 9 , title: 'Aqva'   },
      // {id: 19 , title: 'Build'  },
    ];
    this._tenders = [
      //  {id: 1,  name: "AAAAA_7",  img: null,	                                     tender_description: "3fghfghgfhfgh", tender_status: 7, userId: 2,	typeTenderId: 2},
      //  {id: 2,  name: "AAAAA_79", img: null,	                                     tender_description: "3fghfghgfhfgh", tender_status: 7,	userId: 2,	typeTenderId: 2},
      //  {id: 3, name: "BBB_72",   img: null,	                                     tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2},
      //  {id: 4, name: "BBB_72",   img: "093a65c5-13f8-4dc7-9e5f-7f9a477fc70d.jpg"	,tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2},
      //  {id: 5,  name: "AAAAA_7",  img: null,	                                     tender_description: "3fghfghgfhfgh", tender_status: 7, userId: 2,	typeTenderId: 2},
      //  {id: 6,  name: "AAAAA_79", img: null,	                                     tender_description: "3fghfghgfhfgh", tender_status: 7,	userId: 2,	typeTenderId: 2},
      //  {id: 7, name: "BBB_72",   img: null,	                                     tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2},
      //  {id: 8, name: "BBB_72",   img: "093a65c5-13f8-4dc7-9e5f-7f9a477fc70d.jpg"	,tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2},
    ];
    this._selectedTypesTender = {};
    makeAutoObservable(this);
  }

  setTypesTender(typesTender) {
    this._typesTender = typesTender;
  }

  setTender(tenders) {
    this._tenders = tenders;
  }

  setSelectedTypesTender(typesTender) {
    this._selectedTypesTender = typesTender;
  }

  get typesTender() {
    return this._typesTender;
  }

  get tenders() {
    return this._tenders;
  }

  get selectedTypesTender() {
    return this._selectedTypesTender;
  }
}
