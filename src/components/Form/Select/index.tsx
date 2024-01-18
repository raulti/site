import React, { useRef, useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import ReactSelect from 'react-select';

import { useField } from '@unform/core';

import { ISelectProps } from '@/interfaces/components/form/Select';

import { Error, Container } from '../styles';
import { ContainerSelect } from './styles';

const Select: React.FC<ISelectProps> = ({
  name,
  isMulti,
  options,
  label,
  textNoOptions,
  typeVariation,

  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: any) => option.value);
        }

        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
      clearValue: (ref: any) => {
        ref.select.clearValue();
      },
      setValue: (ref: any, value: any) => {
        ref.select.setValue(value);
      },
    });
  }, [fieldName, registerField, isMulti]);

  return (
    <ContainerSelect className="select">
      <Container
        isErrored={!!error}
        isFocused={selectRef.current?.value}
        isFilled={selectRef.current?.value}
        typeVariation={typeVariation}
      >
        <div className="Content">
          {label && <label htmlFor={name}>{label}</label>}

          <ReactSelect
            ref={selectRef}
            defaultValue={defaultValue}
            noOptionsMessage={() => textNoOptions}
            isMulti={isMulti}
            options={options}
            classNamePrefix="react-select"
            id="long-value-select"
            instanceId="long-value-select"
            {...rest}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#C5C3C6', // holver
                primary: '#24A5F2', // Item Selecionado

                primary75: '#24A5F2',
                primary50: '#24A5F2',
                neutral0: '#fff',
              },
            })}
            {...rest}
          />
        </div>

        {error && (
          <Error title={error} className="content-error">
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Container>
    </ContainerSelect>
  );
};

export default Select;
