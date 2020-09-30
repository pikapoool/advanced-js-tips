// 2. The Open Closed - A software artifact should be open for extension but closed for modification.
const initialState = [
	{
		text: 'text', completed: false, id: 0
	}
]

export default function todos(state = initialState, actions) {
	switch(action.type) {
		case ADD_TODO:
			return [
				{
					id: state.reduce(...),
					completed: false,
					text: action.text,
				},
				...state
			]
	}
}

// ********************************************************************************************************

class ReducerPool {
	constructor(){
		this.reducers = []
	}
	registerReducer(reducer){
		reducers.push(reducer);
	}
	getNewState(state, action) {
		return reducers.reduce(
			(state, reducer) => reducer.getNewState(state, action),
			state
		)
	}
}

class AddTodoReducer extends BaseReducer {
	getNewState(state, action) {
		if (action.type === ADD_TODO) {
			return [
				{
					id: state.reduce(...),
					completed: false,
					text: action.text,
				},
				...state
			];
		} else {
			return state;
		}
	}
}

