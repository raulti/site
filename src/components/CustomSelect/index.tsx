import React, { useCallback, useState } from 'react';
import { FaCalendar, FaMap, FaMapMarker, FaMapMarkerAlt } from 'react-icons/fa';
import ReactSelect from 'react-select';

import { Container } from './styles';

export interface IOption {
  id?: number;
  value: string;
  label: string;
}

interface ICustomSelect {
  value: IOption;
  name: string;
  options: IOption[];
  handleChange(v: IOption): void;
}

const CustomSelect: React.FC<ICustomSelect> = ({
  name,
  value,
  options,
  handleChange,

  ...rest
}) => {
  const [active, setActive] = useState(false);

  const onChange = useCallback(
    (v: IOption) => {
      setActive(false);
      handleChange(v);
    },
    [handleChange],
  );

  return (
    <Container>
      <div>
        <div className="content">
          <button type="button" onClick={() => setActive(state => !state)}>
            <FaMapMarkerAlt />
            Selecionar Cidade
          </button>

          <p>{value?.label}</p>
        </div>
        <ReactSelect
          id={name}
          className="react-select"
          isMulti={false}
          options={options}
          classNamePrefix="react-select"
          isSearchable={false}
          menuIsOpen={active}
          onChange={onChange}
          value={value}
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
    </Container>
  );
};

export default CustomSelect;
