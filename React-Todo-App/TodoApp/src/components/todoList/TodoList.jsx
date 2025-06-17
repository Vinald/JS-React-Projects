import { useState } from "react";
import styles from "./TodoList.module.css";

function TodoList() {
    const [tasks, setTasks] = useState(["eat food", "two"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim().length !== 0) {
            setTasks((tasks) => [...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [
                updatedTasks[index - 1],
                updatedTasks[index],
            ];
            setTasks(updatedTasks);
        }
    };

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [
                updatedTasks[index + 1],
                updatedTasks[index],
            ];
            setTasks(updatedTasks);
        }
    };

    return (
        <>
            <div className={styles.toDoList}>
                <h1>To-Do-List</h1>
            </div>
            <div>
                <input
                    type={"text"}
                    placeholder={"Add a new task"}
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className={styles.addButton} onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className={styles.listItem}>
                        <span className={styles.text}>{task}</span>

                        <button className={styles.moveButton} onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button className={styles.moveButton} onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                        <button className={styles.deleteButton} onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default TodoList;
