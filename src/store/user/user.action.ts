import {Action, ActionWithPayload, createAction, WithMatcher} from "../../utils/reducer/reducer.utils";
import {USER_ACTION_TYPES} from "./user.types";
import {AdditionalInformation, UserData} from "../../utils/firebase/firebase.utils";
import { User } from 'firebase/auth';

export type CheckUserSession=Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SetCurrentUer=ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email:string;password:string}>;
export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, {email:string;password:string,displayName:string}>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED,Error>;
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: User; additionalDetails: AdditionalInformation }>;
export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED,Error>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED,Error>;
export const checkUserSession = WithMatcher(():CheckUserSession =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));


export const setCurrentUser = WithMatcher((user:UserData):SetCurrentUer => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

});



export const googleSignInStart = WithMatcher(():GoogleSignInStart =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = WithMatcher(
    (email:string, password:string):EmailSignInStart => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password
}));

export const signInSuccess = WithMatcher(
    (user:UserData &{id:string}):SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = WithMatcher((error:Error):SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signUpStart = WithMatcher(
    (email:string, password:string, displayName:string):SignUpStart => createAction(USER_ACTION_TYPES.SIGN_UP_START,
    {email, password, displayName}));

export const signUpSuccess = WithMatcher(
    (user:User, additionalDetails:AdditionalInformation):SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    {user, additionalDetails}));

export const signUpFailed = WithMatcher((error:Error):SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signOutStart = WithMatcher(():SignOutStart=>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START));
export const signOutSuccess = WithMatcher(():SignOutSuccess=>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));
export const signOutFailed = WithMatcher((error:Error):SignOutFailed=>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED,error));
