import React, { useContext, useState, useEffect } from "react";

import { Redirect } from "react-router-dom";

import { storage } from "../firebase";

import { AuthContext } from "./Auth";
import { signOut } from "./user/utils";
import { paths } from "./paths";
import TodosSection from "./TodosSection";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const { logIn } = paths;

  const imagePath =
    currentUser && storage.ref("users/" + currentUser.uid + "/profile.jpg");

  useEffect(() => {
    if (currentUser) {
      const setGeneric = () =>
        storage
          .ref("user.svg")
          .getDownloadURL()
          .then((url) => setUrl(url));

      imagePath
        .getDownloadURL()
        .then((url) => setUrl(url))
        .catch(() => setGeneric());
    } else return <Redirect to={logIn} />;
  }, [currentUser, imagePath, logIn]);

  function setImageFirebase(e) {
    e.preventDefault();

    if (image) {
      imagePath
        .put(image)
        .then((snap) => snap.ref.getDownloadURL())
        .then((downloadURL) => {
          setUrl(downloadURL);
        });
      setImage("");
    } else alert("Upload a photo!");
  }

  function onImageChange(e) {
    const imageInput = e.target.files[0];

    if (imageInput) {
      if (imageInput.size > 200000) {
        alert("Photo is too big, try below 200KB");
      } else if (imageInput.type.includes("image")) {
        setImage(imageInput);
      }
    }
  }

  return (
    <>
      <h1>Home</h1>
      <img src={url} alt="" />
      <p>
        You are logged, do you want to Sign Out ?
        <button onClick={signOut}>Sign out</button>
        <br />
      </p>
      <br />
      <form onSubmit={setImageFirebase}>
        <input type="file" accept=".jpg, .png" onChange={onImageChange} />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <TodosSection />
    </>
  );
};

export default Home;
