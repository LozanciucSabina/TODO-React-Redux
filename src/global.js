import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.body}
}

.header{
  background: ${({ theme }) => theme.header}
}

.user__icon {
  background: ${({ theme }) => theme.userGradient}
}

.user__menu {
  background: ${({ theme }) => theme.userMenu};
} 

.user__menu__image-upload,
.user__menu__sign-out-btn {
  background: ${({ theme }) => theme.userMenu};
  border-color: ${({ theme }) => theme.userMenuButtonBorder};
  color: ${({ theme }) => theme.userMenuButtonText}
}

.todo{
  box-shadow: ${({ theme }) => theme.shadow};
}

.todo__form, 
.todo__items,
.todo__footer, 
.todo__footer__filters {
  background: ${({ theme }) => theme.todoSection}
}


.todo__form__input {
  color: ${({ theme }) => theme.input}
}

.todo-app__bg-image {
  background-image: ${({ theme }) => {
    return window.innerWidth > 375 ? theme.bgImageDesktop : theme.bgImageMobile;
  }}
}

.todo__form__radio-button, 
.todo-item__check-btn {
  background: ${({ theme }) => theme.formRadioButton}
}

.todo-item__check-btn--show-gradient,
.todo-item__check-btn:hover {
  background: ${({ theme }) => theme.radioButton}
}

.todo-item__text {
  color: ${({ theme }) => theme.activeTodo}
}

.todo-item:hover .todo-item__text{
  color: ${({ theme }) => theme.hoverTodo}
}

.todo-item:hover .todo-item__text--checked{
  color: ${({ theme }) => theme.checkedTodo}
}

.todo-item__text--checked{
  color: ${({ theme }) => theme.checkedTodo};
  text-decoration-color: ${({ theme }) => theme.checkedTodo}
}

.todo-item {
  border-bottom-color: ${({ theme }) => theme.bottomBorder}
}

.todo__form__radio-button__overlay, 
.todo-item__check-btn__overlay{
  background: ${({ theme }) => theme.overlay}
}

.todo__footer, 
.filter--inactive{
  color: ${({ theme }) => theme.footerText};
}

.authentication__type {
  color: ${({ theme }) => theme.authenticationType};
}

 .authentication, .authentication__form__input{
  background-color: ${({ theme }) => theme.authenticationForm}
}

.authentication__form__input, .authentication__form__input::placeholder {
  color: ${({ theme }) => theme.authenticationFormInput};
  border-color: ${({ theme }) => theme.authenticationFormInput};
}

.authentication__line {
  background-color: ${({ theme }) => theme.authenticationLine} 
}
`;
