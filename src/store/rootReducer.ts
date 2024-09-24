import { combineSlices } from "@reduxjs/toolkit";
import { klinesSlice } from "./reducers/klinesSlice";
import { themeSlice } from './reducers/themeSlice';


const rootReducer = combineSlices(klinesSlice, themeSlice);
export default rootReducer;