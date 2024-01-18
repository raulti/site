import { useEffect, useRef, InputHTMLAttributes } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField, SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Error } from '../styles';
import { Container } from './styles';

/**
 * This example renders one checkbox. If you want to render multiple options,
 * check the other checkbox example, or adapt this one.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
 */

interface Props {
  name: string;
  label?: string;
  value?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export default function Checkbox({
  name,
  value,
  label,
  children,
  ...rest
}: InputProps) {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultChecked = defaultValue;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.checked;
      },
      clearValue: ref => {
        /**
         * If you want to change the default checked for false or true,
         * you can do so here. In this example, when resetting the form,
         * the checkbox goes back to its initial state.
         */
        ref.current.checked = false;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <Container className="checkboxContainer">
      <div>
        <input
          defaultChecked={defaultChecked}
          ref={inputRef}
          value={value}
          type="checkbox"
          className="checkbox"
          id={fieldName}
          {...rest}
        />

        <label htmlFor={fieldName} key={fieldName}>
          {label}
        </label>

        {children}
      </div>

      {/* {error && (
        <span className="error">
          <FiAlertCircle color="#c53030" size={20} /> {error}
        </span>
      )} */}

      {error && (
        <Error title={error} className="content-error">
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
}
