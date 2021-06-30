import { STORAGE_VOUCHERS } from "../actionsTypes";
const initialState = {
  vouchers: null,
};

export const InfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORAGE_VOUCHERS:
      return {
        ...state,
        vouchers: action.vouchers,
      };
    default:
      return state;
  }
};
