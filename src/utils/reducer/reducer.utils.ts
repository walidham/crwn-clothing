import {AnyAction} from 'redux';
/*
// Narrow type
type Alien = {
    fly:()=>void;
}

type Human ={
    speak:()=>void;
}

//Intersection type
type Hybrid = Human & Alien;
const User:Hybrid={
    fly:()=>{console.log("fly")},
    speak:()=>{console.log("speak")}
}
function isHuman(entity:Human|Alien):entity is Human{
    return (entity as Human).speak !== undefined;
}
*/

type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>;
}

export function WithMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;
export function WithMatcher<AC extends (...args: any[]) => AnyAction & {
    type: string
}>(actionCreator: AC): Matchable<AC>;
export function WithMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction) {
            return action.type===type;
        }
    })
}

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return {type, payload};
}

//export const createAction = (type,payload)=> ({type,payload})
