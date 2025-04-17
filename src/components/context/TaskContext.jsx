import { useState, createContext, useEffect } from "react";
import TaskData from "../Task/TaskData";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [taskEdit, setTaskEdit] = useState({
    task: {},
    edit: false,
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskListRef = collection(db, "taskList");
        const q = query(taskListRef, orderBy("title"), limit(10));
        const querySnapshot = await getDocs(q);
        const taskList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setTaskList(taskList);
      } catch (error) {
        console.error("Error Fetching Task List", error);
      }
    };
    fetchTask();
  }, []);

  //Add the task
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    newTask.checked = false;
    try {
      const docRef = addDoc(collection(db, "taskList"), newTask);
      // console.log("Document written: ", docRef.id);
      setTaskList((preTaskList) => [
        ...preTaskList,
        { id: docRef.id, data: newTask },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  //To edit the task
  const editTask = (task) => {
    setTaskEdit({ task, edit: true });
  };

  //Update task
  const updateTask = (id, updTask) => {
    const docRef = doc(db, "taskList", id);
    console.log(id, updTask);
    updateDoc(docRef, updTask);
    // setTaskList(
    //   taskList.map((task) => (task.id === id ? { ...task, ...updTask } : task))
    // );
    setTaskList((preTaskList) => [
      ...preTaskList,
      { id: docRef.id, data: updTask },
    ]);
  };

  //Delete the task
  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        const docRef = doc(db, "taskList", id);
        await deleteDoc(docRef);
        setTaskList(taskList.filter((task) => task.id !== id));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  const checkTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        deleteTask,
        checkTask,
        addTask,
        editTask,
        updateTask,
        taskEdit,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
