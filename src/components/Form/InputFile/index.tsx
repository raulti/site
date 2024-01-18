import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { FaEdit } from 'react-icons/fa';

import { useField } from '@unform/core';

import Image from 'next/image';

import Tooltip from '@/components/Tooltip';

import { Container } from './styles';

interface Props {
  name: string;

  tooltip?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export default function ImageInput({ name, tooltip, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container className="input-img">
      <Tooltip title={tooltip || '357x100'}>
        <div className="preview">
          {preview && (
            <Image src={preview} alt="Preview" height={100} width={357} />
          )}
        </div>
      </Tooltip>
      <input
        id={name}
        type="file"
        ref={inputRef}
        onChange={handlePreview}
        {...rest}
      />
      <label htmlFor={name}>
        <FaEdit size={14} />
        Alterar foto
      </label>
    </Container>
  );
}
