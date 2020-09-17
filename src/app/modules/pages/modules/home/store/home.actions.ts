import { createAction, props } from "@ngrx/store";

export const addProduct = createAction('[home]AddProduct', props<{product:any}>()); 