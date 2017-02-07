import { DEMO_TYPE } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case DEMO_TYPE:
            return {...state};
    }

    return state;
}
