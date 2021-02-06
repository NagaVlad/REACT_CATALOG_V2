import {
   CLOSE, CLOSE2, SHOW, SHOW2, GET_DATA_AND_FILTRED, ADD_TO_CART, CHANGE_FILTER_BY_NAME,
   CHANGE_FILTER_FLAG,
   CHANGE_PRODUCT_ITEM_CHECKED_STATUS
} from '../actions/actionTypes'
const initialState = {
   modal: false,
   modalReg: false,
   checkedFilter: true,

   data: [],
   filtredByNameData: [],
   cart: [],
   arrayRef: [],

}


export default function appReducer(state = initialState, action) {
   console.log(SHOW);
   switch (action.type) {
      case SHOW:
         return {
            ...state, modal: !state.modal
         }
      case SHOW2:
         return {
            ...state, modalReg: !state.modalReg
         }
      case CLOSE:
         return {
            ...state, modal: false
         }
      case CLOSE2:
         return {
            ...state, modalReg: false
         }

      case GET_DATA_AND_FILTRED:
         console.log('TEST');
         return {
            ...state,
            data: [...action.payload],
            filtredByNameData: [...action.payload]
         }
      case ADD_TO_CART:
         return {
            ...state,
            cart: [...action.payload],
         }
      case CHANGE_FILTER_BY_NAME:
         return {
            ...state,
            filtredByNameData: [...action.payload],
         }
      case CHANGE_FILTER_FLAG:
         return {
            ...state,
            checkedFilter: !action.payload,
         }

      default:
         return state
   }
}