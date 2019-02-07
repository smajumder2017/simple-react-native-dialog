import React, { Component } from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import DialogComponent from './DialogComponent';

const dialogReducer = (state = { show: false }, action) => {
    switch (action.type) {
        case 'SHOW':
            return { ...state, show: true, header: action.header, info: action.info };
        case 'HIDE':
            return { ...state, show: false };
        default:
            return state;
    }
};
const store = createStore(dialogReducer);

export default class Dialog extends Component {

    static showDialog(params) {
        store.dispatch({ ...params, type: "SHOW" })
    }
    static hideDialog() {
        store.dispatch({ type: "HIDE" })
    }
    render() {
        return (
            <Provider store={store}>
                <DialogComponent />
            </Provider>
        )
    }
}


