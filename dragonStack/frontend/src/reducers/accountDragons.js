import { ACCOUNT_DRAGONS } from "../actions/types";
import { fetchStates } from "./fetchStates";

const DEFAULT_ACCOUNTS_DRAGON = { dragons: [] };

const accountDragons = (state = DEFAULT_ACCOUNTS_DRAGON, action) => {
  switch (action.type) {
    case ACCOUNT_DRAGONS.FETCH:
      return { ...state, status: fetchStates.fetching };
    case ACCOUNT_DRAGONS.FETCH_ERROR:
      return { ...state, status: fetchStates.error, message: action.message };
    case ACCOUNT_DRAGONS.FETCH_SUCCESS:
      return { ...state, status: fetchStates.success, message: action.dragons };
    default:
      return state;
  }
};

export default accountDragons;
