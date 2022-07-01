import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteGoal} from '../features/goals/goalsSlice';

function GoalItem({ goal }) {
	const dispatch = useDispatch();

	const onDeleteGoal = () => {
		dispatch(deleteGoal(goal._id));
	}

	return (
		<div className="goal">
			<div>
				{ new Date(goal.createdAt).toLocaleString('ua-UA') }
				<h2>{goal.text}</h2>
				<button onClick={onDeleteGoal} className="close">X</button>
			</div>
		</div>
	);
}

export default GoalItem;
