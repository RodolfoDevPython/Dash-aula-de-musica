const INITAL_STATE = {
    modulo: null
}

export default function chooseModulo( state = INITAL_STATE, action ) {

    console.log("chooseModulo")

    const { modulo } = action;

    switch (action.type) {

        case 'ADD_MODULO':

            return { reduceModulo: modulo, showListQuestion: false };

        case 'EDIT_MODULO':

            return { reduceModulo: modulo, showListQuestion: false };

        case 'VIEW_QUESTIONS':

            return { reduceModulo: modulo, showListQuestion: true };
    
        default:

            return state;

    }

}