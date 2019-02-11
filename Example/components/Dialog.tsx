import React, { Component } from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import DialogComponent from './DialogComponent';

export interface DialogState {
    show: boolean;
    header?: string;
    info: string;
    primaryButtonText?:String,
    secondaryButtonText?:String,
    primaryButtonStyle?: ButtonStyle;
    primaryButtonTextStyle?: ButtonTextStyle;
    secondaryButtonStyle?: ButtonStyle;
    secondaryButtonTextStyle?: ButtonTextStyle;
    buttonAlignment?:String;
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
    primaryButtonText?:String,
    secondaryButtonText?:String,
    primaryButtonStyle?: ButtonStyle;
    primaryButtonTextStyle?: ButtonTextStyle;
    secondaryButtonStyle?: ButtonStyle;
    secondaryButtonTextStyle?: ButtonTextStyle;
    buttonAlignment?:String;
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
    primaryButtonText: 'NO',
    secondaryButtonText:'YES',
    primaryButtonStyle: {},
    primaryButtonTextStyle: {},
    secondaryButtonStyle:{},
    secondaryButtonTextStyle:{},
    buttonAlignment: 'right'
}

const dialogReducer = (state = initialState, action: DialogAction): DialogState => {
    switch (action.type) {
        case 'SHOW':
            return { 
                ...state,
                show: true,
                header: action.header, 
                info: action.info, 
                primaryButtonText:action.primaryButtonText || "NO",
                secondaryButtonText:action.secondaryButtonText || "YES",
                primaryButtonStyle: action.primaryButtonStyle || {}, 
                primaryButtonTextStyle: action.primaryButtonTextStyle || {},
                secondaryButtonStyle: action.primaryButtonStyle || {}, 
                secondaryButtonTextStyle: action.primaryButtonTextStyle || {},
                primaryButtonPress: action.primaryButtonPress,
                secondaryButtonPress: action.secondaryButtonPress,
                buttonAlignment: action.buttonAlignment || 'right'
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
    primaryButtonText?:String,
    secondaryButtonText?:String,
    primaryButtonStyle?: ButtonStyle;
    primaryButtonTextStyle?: ButtonTextStyle;
    secondaryButtonStyle?: ButtonStyle;
    secondaryButtonTextStyle?: ButtonTextStyle;
    buttonAlignment?:String
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


