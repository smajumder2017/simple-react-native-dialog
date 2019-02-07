import React, { Component } from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import DialogComponent from './DialogComponent';

export interface DialogState {
    show: boolean;
    header?: string;
    info: string;
    primaryButtonStyle?: ButtonStyle;
    primaryButtonTextStyle?: ButtonTextStyle;
    secondaryButtonStyle?: ButtonStyle;
    secondaryButtonTextStyle?: ButtonTextStyle;
    primaryButtonPress?: ()=>void;
    secondaryButtonPress?: ()=>void;
}

const SHOW = 'SHOW';
type SHOW = typeof SHOW;

const HIDE = 'HIDE';
type HIDE = typeof HIDE;

export interface ShowDialog {
    type: SHOW;
    header?: string;
    info: string;
    primaryButtonStyle?: ButtonStyle;
    primaryButtonTextStyle?: ButtonTextStyle;
    secondaryButtonStyle?: ButtonStyle;
    secondaryButtonTextStyle?: ButtonTextStyle;
    primaryButtonPress?: ()=>void;
    secondaryButtonPress?: ()=>void;
}

export interface ButtonStyle {
    backgroundColor?: string
}

export interface ButtonTextStyle {
    color?: string
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

const initialState: DialogState = {
    show: false,
    header: '',
    info: '',
    primaryButtonStyle: {},
    primaryButtonTextStyle: {},
    secondaryButtonStyle:{},
    secondaryButtonTextStyle:{}
}

const dialogReducer = (state = initialState, action: DialogAction): DialogState => {
    switch (action.type) {
        case 'SHOW':
            return { 
                ...state,
                show: true,
                header: action.header, 
                info: action.info, 
                primaryButtonStyle: action.primaryButtonStyle || {}, 
                primaryButtonTextStyle: action.primaryButtonTextStyle || {},
                secondaryButtonStyle: action.primaryButtonStyle || {}, 
                secondaryButtonTextStyle: action.primaryButtonTextStyle || {},
                primaryButtonPress: action.primaryButtonPress,
                secondaryButtonPress: action.secondaryButtonPress
            };
        case 'HIDE':
            return { ...state, show: false };
        default:
            return state;
    }
};
const store = createStore(dialogReducer);

interface DialogParams {
    header?: string;
    info: string;
    primaryButtonStyle?: ButtonStyle;
    primaryButtonTextStyle?: ButtonTextStyle;
    secondaryButtonStyle?: ButtonStyle;
    secondaryButtonTextStyle?: ButtonTextStyle;
    primaryButtonPress?: ()=>void;
    secondaryButtonPress?: ()=>void;
}

export default class Dialog extends Component {
    static showDialog(params: DialogParams) {
        store.dispatch({ ...params, type: "SHOW"})
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


