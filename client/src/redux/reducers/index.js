import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import theme from "./themeReducer";
import askModal from "./askModalReducer";
import bountyModal from "./bountyModalReducer";
import question from "./questionReducer";
import detailQuestion from "./detailQuestionReducer";
import tags from "./tagsReducer";
import profile from "./profileReducer";
import userType from "./userTypeReducer";
import admin from "./adminReducer";



export default combineReducers({
  admin,
  auth,
  alert,
  theme,
  askModal,
  bountyModal,
  question,
  detailQuestion,
  tags,
  profile,userType
});