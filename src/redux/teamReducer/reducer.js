import { GET_SCALES, LOADING } from "../../actions/actionsTypes";
import { teamHeaderConfigs, teamData } from "../../constants";

const initialState = {
  scales: null,
  loading: false,
  teamHeaders: teamHeaderConfigs,
  team: teamData,
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCALES:
      return {
        ...state,
        scales: action.scales,
      };
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
