import {UPDATE_POSITION} from '../constant'


const initState = {
    label: "北京",
    value: "AREA|88cff55c-aaa4-e2e0"
}

export default function reducer(preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case UPDATE_POSITION:
            preState = data
            return preState;
        default:
            return preState
    }
}