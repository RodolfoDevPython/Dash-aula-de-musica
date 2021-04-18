const INITAL_STATE = {
    boxShow: false,
    modulo: false
}

export default function boxAction( state = INITAL_STATE, action ) {

    console.log("BoxAction Reducer")
    console.log(action)

    switch (action.type) {

        case 'BOX_ADD':

            return { boxShow: true, modulo: action.modulo };

        case 'BOX_EDIT':

            return { boxShow: true, modulo: action.modulo };

        case "BOX_CLOSE":

            return { boxShow: false, modulo: null };
    
        default:

            return state;
    }

}