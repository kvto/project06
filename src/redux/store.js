import { applyMiddleware } from "redux"; //sincronico
import {legacy_createStore as createStore} from 'redux';
import rootReducers from "./reducers/" //todos los reducers

const store = createStore(rootReducers);

//middleware => funcion que se interpone entre el state y el dispatch

