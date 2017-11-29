import { upsert } from './upsert';

export default function inflate(state, newState) {
	var intermediateNewState = Object.assign({}, newState);
	for (var property in newState) {
		if (property.split('.').length > 1) {
			intermediateNewState = upsert(
				Object.assign({}, state),
				property,
				newState[property]
			);
			delete intermediateNewState[property];
		}
	}
	return intermediateNewState;
}
