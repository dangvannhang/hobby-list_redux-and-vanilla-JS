// Create a initial state
// Create a reducer
// Create a store
// Add event submit for formHobbyId
// Handle event submit text
// Render list



const { createStore } = window.Redux;

const initialState = [];

const hobbyReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = state;

            newList.push(action.payload.value);
            console.log('New list: ', newList)
            return newList;
        }
        default: 
            return state;
    }
}
// create a store
const store = createStore(hobbyReducer)

function renderHobbyList (hobbyList){
    // check state is array or not and check length of array must bigger than 0
    if(!Array.isArray(hobbyList) || hobbyList.length === 0 ) return ;

    const hobbyListElement = document.querySelector('#hobby__list');
    hobbyListElement.innerHTML='';

    hobbyList.map(unit => {
        const liElement = document.createElement('li')
        liElement.textContent = unit;
        return hobbyListElement.appendChild(liElement)
    })

    return hobbyListElement;
}



// get form and add event submit for form
const formHobbyElement = document.querySelector('#form__hobbyId');

if(formHobbyElement){
    const handleSubmitHobby = (e) => {
        e.preventDefault();

        const hobbyTextElement = formHobbyElement.querySelector('#hobbyTextId');
        if(!hobbyTextElement) return ;
    
        store.dispatch({type: 'ADD_HOBBY', payload: {value: hobbyTextElement.value}})
        hobbyTextElement.value=''
    }
    formHobbyElement.addEventListener('submit', handleSubmitHobby)
    
}






store.subscribe(()=> {
    const newList = store.getState()
    renderHobbyList(newList)
})