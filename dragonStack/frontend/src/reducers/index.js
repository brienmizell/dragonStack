import { combineReducers } from "redux";
import account from "./account";
import dragon from "./dragon";
import generation from "./generation";
import accountDragons from "./accountDragons";
import accountInfo from "./accountInfo";

export default combineReducers({
  generation,
  dragon,
  account,
  accountDragons,
  accountInfo
});
