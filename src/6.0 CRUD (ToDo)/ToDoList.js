import {useState, useEffect} from 'react';
import styles from './ToDo.module.css';
import { CiEdit, CiTrash } from "react-icons/ci";

const LOCAL_STORAGE_KEY = 'tasks';

export default function ToDoList() {
    const [newTask, setNewTask] = useState('');
	const [toDoList, setToDoList] = useState(() => {
		const storedList = localStorage.getItem(LOCAL_STORAGE_KEY);
		console.log(storedList);
		return storedList ? JSON.parse(storedList) : []
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDoList));
    }, [toDoList]);
	
	const handleInputChange = (e) => {
		setNewTask(e.target.value)
	};

	const addTask = () => {
		const trimmedTask = newTask.trim();
		
		if (trimmedTask === '') return;
		setToDoList([...toDoList, {text: trimmedTask, completed: false}]);
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
				? {...task, completed: status}
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
								isCompleted={task["completed"]}
								changeStatus={(status) => {changeTaskStatus(i, status)}}
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
	const handleEdit = () => {
		if (!isEditing) setEditing(true)
	};
    const handleStatus = () => {
        props.changeStatus(!props.isCompleted);
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
				checked={props.isCompleted}
				onChange={handleStatus}
			/>
			<div
				className={styles.taskText}
				onDoubleClick={handleEdit}
			>
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
							color: props.isCompleted && "green",
							textDecoration: props.isCompleted && "line-through"
						}}
					>
						{props.text}
					</span>
				}
			</div>
			<div className={styles.buttonGroup}>
				<button
					className={styles.editButton}
					onClick={handleEdit}
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