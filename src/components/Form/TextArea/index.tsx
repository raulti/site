import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { ITextAreaProps } from '@/interfaces/components/form/TextArea';

import { Container, Error } from '../styles';
import { TextAreaContainer } from './styles';

const TextArea: React.FC<ITextAreaProps> = ({
  name,
  label,
  style,
  typeVariation,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
    <TextAreaContainer>
      <Container
        isFocused={isFocused}
        isFilled={isFilled}
        isErrored={!!error}
        style={style}
        typeVariation={typeVariation}
      >
        <div className="Content">
          {label && <label htmlFor={name}>{label}</label>}
          <textarea
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={defaultValue}
            ref={inputRef}
            {...rest}
          />
        </div>

        <Error title={error} className="content-error">
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      </Container>
    </TextAreaContainer>
  );
};

export default TextArea;
