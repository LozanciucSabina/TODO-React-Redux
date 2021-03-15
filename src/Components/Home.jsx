import React, { useContext, useState, useEffect } from "react";

import { Redirect } from "react-router-dom";

import { storage } from "../firebase";

import { AuthContext } from "./Auth";
import { signOut } from "./user/utils";
import { paths } from "./paths";
import TodosSection from "./TodosSection";

import user from "../images/user.svg";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [url, setUrl] = useState("");

  const { logIn } = paths;

  const imagePath =
    currentUser && storage.ref("users/" + currentUser.uid + "/profile.jpg");

  useEffect(() => {
    if (currentUser) {
      imagePath
        .getDownloadURL()
        .then((url) => setUrl(url))
        .catch(() => {
          return setUrl(user);
        });
    } else return <Redirect to={logIn} />;
  }, [currentUser, imagePath, logIn]);

  function onImageChange(e) {
    const imageInput = e.target.files[0];

    if (imageInput) {
      if (imageInput.size > 1500000) {
        alert("Photo is too big, try below 1.5MB");
      } else if (imageInput.type.includes("image")) {
        imagePath
          .put(imageInput)
          .then((snap) => snap.ref.getDownloadURL())
          .then((downloadURL) => {
            // const img = new Image();
            // img.src = downloadURL;
            // img.onload = function () {
            //   alert(this.width + "px " + this.height + "px");
            // };
            setUrl(downloadURL);
          });
      }
    }
  }

  function showMenu() {
    const menu = document.getElementsByClassName("user__menu")[0];
    menu.classList.toggle("user__menu--hide");
  }

  return (
    <>
      <div className="user">
        <div className="user__icon">
          <div className="user__icon__wrapper" onClick={showMenu}>
            <img
              src={url}
              className={
                url === user
                  ? "user__icon--default-styles"
                  : "user__icon--user-uploaded"
              }
              alt="user icon"
            />
          </div>
        </div>
        <div className="user__menu user__menu--hide">
          <form className="user__menu__image-upload">
            Add a photo
            <input
              className="user__menu__image-upload__input"
              type="file"
              accept=".jpg, .png"
              onChange={onImageChange}
            />
          </form>
          <button
            onClick={() => {
              signOut();
            }}
            className="user__menu__sign-out-btn"
          >
            Sign out
          </button>
        </div>
      </div>
      <TodosSection />
    </>
  );
};

export default Home;
