import React, { Component } from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import DialogComponent from './DialogComponent';

export interface DialogState {
    show: boolean;
    header: string;
    info: string;
}

const SHOW = 'SHOW';
type SHOW = typeof SHOW;

const HIDE = 'HIDE';
type HIDE = typeof HIDE;

export interface ShowDialog {
    type: SHOW;
    header: string;
    info: string;
}

export interface HideDialog {
    type: HIDE;
}

export type DialogAction = ShowDialog | HideDialog;

export function hideDialog(): HideDialog {
    return {
        type: HIDE
    }
}

const initialState : DialogState ={
    show: false,
    header: '',
    info: ''
}

const dialogReducer = (state = initialState, action: DialogAction): DialogState => {
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

interface DialogParams {
    header: string;
    info: string;
}

export default class Dialog extends Component {

    static showDialog(params: DialogParams) {
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

