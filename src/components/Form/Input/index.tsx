import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { IInputProps } from '@/interfaces/components/form/Input';

import { Container, Error } from '../styles';

const Input: React.FC<IInputProps> = ({
  name,
  label,
  typeVariation,
  icon,
  style,
  children,
  width,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
      style={style}
      typeVariation={typeVariation}
      className="input"
      width={width}
    >
      {icon && <label htmlFor={name}>{icon}</label>}

      <div className="Content">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          id={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          autoComplete="off"
          {...rest}
        />
      </div>

      {children}

      <Error title={error} className="content-error">
        <FiAlertCircle color="#c53030" size={20} />
      </Error>
    </Container>
  );
};

export default Input;
