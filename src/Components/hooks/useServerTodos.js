import { useEffect } from "react";
import { getTasksFirebase } from "../tasks/utils";
import { setTasks } from "../redux/actionCreators";

export default function useServerTodos({ currentUser, dispatch }) {
  useEffect(() => {
    if (currentUser) {
      getTasksFirebase(currentUser).then((todos) => {
        dispatch(setTasks(todos));
      });
    }
  }, [currentUser, dispatch]);
}
