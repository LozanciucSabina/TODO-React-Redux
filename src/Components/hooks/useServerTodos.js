import { useEffect } from "react";
import { getTasksFromServer } from "../tasks/utils";
import { setTasks } from "../redux/actionCreators";

export default function useServerTodos({ currentUser, dispatch }) {
  useEffect(() => {
    if (currentUser) {
      getTasksFromServer(currentUser).then((todos) => {
        dispatch(setTasks(todos));
      });
    }
  }, [currentUser, dispatch]);
}
