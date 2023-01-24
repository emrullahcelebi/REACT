import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./slices/locale-slice";
import themeSlice from "./slices/theme-slice";
import "flag-icons/css/flag-icons.min.css";

export default configureStore({
    reducer :{
        theme:themeSlice,
        locale: localeSlice
    }
})