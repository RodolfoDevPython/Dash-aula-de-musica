const INITAL_STATE = {
    modulo: null
}

export default function chooseModulo( state = INITAL_STATE, action ) {

    console.log("chooseModulo")

    const { modulo } = action;

    switch (action.type) {

        case 'ADD_MODULO':

            return { reduceModulo: modulo };

        case 'EDIT_MODULO':

            return { reduceModulo: modulo };
    
        default:

            return state;

    }

}