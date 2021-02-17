import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../redux/actionCreators";

export default function useServerTodos({ currentUser }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      dispatch(setTasks(currentUser));
    }
  }, [currentUser, dispatch]);
}
