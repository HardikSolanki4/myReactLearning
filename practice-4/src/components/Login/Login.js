import React, { useContext, useReducer, useRef, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const inputReducer = (state, action) => {
  if (action.inputType === 'EMAIL') {
    return {
      inputType: {
        ...state.inputType,
        email: action.value,
        isDirtyEmail: true,
        isEmailValid: action.value.includes('@'),
      },
    };
  }
  if (action.inputType === 'PASSWORD') {
    return {
      inputType: {
        ...state.inputType,
        password: action.value,
        isDirtyPassword: true,
        isPasswordValid: action.value.length > 6,
      },
    };
  }
  if (action.inputType === 'INPUT_BLUR') {
    // console.log(state);
    return {
      ...state,
    };
  }
  return {
    inputType: {
      email: '',
      isEmailValid: false,
      password: '',
      isPasswordValid: false,
    },
  };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    inputType: {
      email: '',
      isEmailValid: false,
      isDirtyEmail: false,
      password: '',
      isPasswordValid: false,
      isDirtyPassword: false,
    },
  });

  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const emailChangeHandler = (event) => {
    inputDispatch({ inputType: 'EMAIL', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    inputDispatch({ inputType: 'PASSWORD', value: event.target.value });
  };

  const validateEmailHandler = () => {
    inputDispatch({ inputType: 'INPUT_BLUR' });
    setFormIsValid(
      inputState.inputType.isEmailValid && inputState.inputType.isPasswordValid
    );
  };

  const validatePasswordHandler = () => {
    inputDispatch({ inputType: 'INPUT_BLUR' });
    setFormIsValid(
      inputState.inputType.isEmailValid && inputState.inputType.isPasswordValid
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(
        inputState.inputType.email,
        inputState.inputType.password
      );
    } else if (!inputState.inputType.isEmailValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          isDirty={inputState.inputType.isDirtyEmail}
          isValid={!inputState.inputType.isEmailValid}
          id='email'
          label='email'
          type='email'
          value={inputState.inputType.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          isDirty={inputState.inputType.isDirtyPassword}
          isValid={!inputState.inputType.isPasswordValid}
          id='password'
          label='password'
          type='password'
          value={inputState.inputType.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
