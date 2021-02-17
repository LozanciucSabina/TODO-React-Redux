import app from "../../firebase";

export const createUser = ({ email, password }) => {
  app
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .catch((error) => alert(error.message));
};

export const logInUser = ({ email, password }) => {
  app
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .catch((error) => alert(error.message));
};

export const signOut = () => app.auth().signOut();
