import {UPDATE_POSITION} from '../constant'


const initState = ""

export default function reducer(preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case UPDATE_POSITION:
            return data;
        default:
            return preState
    }
}