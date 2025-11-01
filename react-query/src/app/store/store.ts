import { configureStore  } from "@reduxjs/toolkit";
import  storeAuth  from "./slices/authSlice";

export const store= configureStore({
    reducer:{
        auth:storeAuth
    }
})

export type selector= ReturnType<typeof store.getState>
export type dispatch= typeof store.dispatch;


