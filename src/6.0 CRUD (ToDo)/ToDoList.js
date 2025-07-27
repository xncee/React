import {useState, useEffect} from 'react';
import styles from './ToDo.module.css';
import { CiEdit, CiTrash } from "react-icons/ci";

export default function ToDoList() {
    const [newTask, setNewTask] = useState('');
	const [toDoList, setToDoList] = useState([
		{ id: 1, text: "React Course -- 2 hours", done: true },
		{ id: 2, text: "Web development Course -- section 8+9", done: false },
		{ id: 3, text: "Clinxra -- design patient list UI", done: false },
		{ id: 4, text: "Fix appointment booking bug", done: false },
		{ id: 5, text: "Watch Git branching tutorial", done: true },
		{ id: 6, text: "Study database normalization", done: false },
		{ id: 7, text: "Workout -- push day", done: true },
		{ id: 8, text: "Refactor backend API for subscriptions", done: false },
		{ id: 9, text: "Review Tailwind CSS animations", done: false },
		{ id: 10, text: "Write README for Clinxra repo", done: false },
		{ id: 11, text: "Learn unit testing in React", done: false },
		{ id: 12, text: "Plan next sprint tasks", done: false },
	]);

	const handleInputChange = (e) => {
		setNewTask(e.target.value)
	};

	const addTask = () => {
		const trimmedTask = newTask.trim();

		if (trimmedTask === '') return;
		setToDoList([...toDoList, {text: trimmedTask, done: false}]);
		setNewTask('');
	};

	const deleteTask = (i) => {
		setToDoList(
			toDoList.filter((_, index) => {
				return index !== i
			})
		);
		console.log(toDoList);
	};

	const changeTaskStatus = (i, status) => {
		setToDoList(
			toDoList.map((task, index) => {
				return (index === i
				? {...task, done: status}
				: task);
			})
		);
	};
	const editTask = (i, newText) => {
		setToDoList(
			toDoList.map((task, index) => {
				return (index === i
				? {...task, text: newText}
				: task);
			})
		);
	}

	return (
		<div>
			<div className={styles.addTask}>
				<input
					className={styles.taskBar}
					type="text"
					value={newTask}
					onChange={handleInputChange}
					onKeyDown={e => {
						if (e.code === 'Enter') addTask();
					}}
				/>
				<button
					onClick={addTask}
				>
					Add task
				</button>
			</div>
			<div className={styles.tasks}>
				{
					toDoList.map((task, i) => {
						return (
							<Task
								key={i}
								text={task["text"]}
								isDone={task["done"]}
								onCheck={(status) => {changeTaskStatus(i, status)}}
								onEdit={(newText) => {editTask(i, newText)}}
								onDelete={() => {deleteTask(i)}}
							/>
						);
					})
				}
			</div>
		</div>
	);
}

function Task(props) {
    const [editText, setEditText] = useState(props.text);
    const [isEditing, setEditing] = useState(false);

	const handleInputChange = (e) => {
        setEditText(e.target.value);
    }
    const handleCheck = () => {
        props.onCheck(!props.isDone);
    };

    const handleBlur = () => {
        setEditing(false);
        const trimmedText = editText.trim();
        setEditText(trimmedText);
        props.onEdit(trimmedText);
    };

	// to keep editText in sync with props.text
	// when props.text changes, the edit text will change as well
	// not really neccassary as you are already updating the editText as you type
	// needed if the parent component (where you render Task) changes the text of some task in runtime (not our case)
	useEffect(() => {
		setEditText(props.text);
	}, [props.text]);

    useEffect(() => {
        if (!isEditing) return;

        const handleKeyPress = (e) => {
            if (e.code === 'Enter') handleBlur();
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEditing, editText]);

    return (
        <div className={styles.task}>
			<input
				className={styles.taskCheckBox}
				type="checkbox"
				checked={props.isDone}
				onChange={handleCheck}
			/>
			<div className={styles.taskText}>
				{
				isEditing
				?
					<textarea
						className={`${styles.taskText} ${styles.taskEdit}`}
						size={Math.max(2, editText.length)}
						type='text'
						value={editText}
						onChange={handleInputChange}
						onBlur={handleBlur}
						autoFocus
					/>
				:
					<span
						style={{
						color: props.isDone && "green",
						textDecoration: props.isDone && "line-through"
						}}
					>
						{props.text}
					</span>
				}
			</div>
			<div className={styles.buttonGroup}>
				<button
					className={styles.editButton}
					onClick={() => !isEditing &&setEditing(true)}
				>
					<CiEdit />
				</button>
				<button
					className={styles.deleteButton}
					onClick={props.onDelete}
				>
					<CiTrash />
				</button>
			</div>
        </div>
    );
}