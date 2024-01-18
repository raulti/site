import React, { useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendar } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';// eslint-disable-line
import { ptBR  } from 'date-fns/locale';// eslint-disable-line
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './styles';

export interface IOption {
  id?: number;
  value: string;
  label: string;
}

interface ICustomInputDate {
  value: any;
  name: string;
  handleChange(v: IOption): void;
}

const CustomInputDate: React.FC<ICustomInputDate> = ({
  value,
  handleChange,

  ...rest
}) => {
  const [active, setActive] = useState(false);

  const onChange = useCallback(
    v => {
      setActive(false);
      handleChange(v);
    },
    [handleChange],
  );

  const dateFormat =
    value &&
    format(value, "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });

  return (
    <Container>
      <div>
        <div className="content">
          <button type="button" onClick={() => setActive(state => !state)}>
            <FaCalendar />
            Selecionar data
          </button>

          <p>{dateFormat}</p>
        </div>

        <DatePicker
          value={value}
          onChange={date => onChange(date)}
          onCalendarClose={() => setActive(false)}
          onCalendarOpen={() => setActive(true)}
          open={active}
          selected={new Date()}
          locale={ptBR}
          className="datepicker"
          {...rest}
        />
      </div>
    </Container>
  );
};

export default CustomInputDate;
