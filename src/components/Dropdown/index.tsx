import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { IDropdown } from '@/interfaces/components/Dropdown';

import { Container, ItemList, Item } from './styles';

const Dropdown: React.FC<IDropdown> = ({ menuName, items, notVisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container
      className="dropdown"
      onMouseLeave={() => setOpen(false)}
      open={open}
      notVisible={notVisible}
    >
      <button type="button" onMouseEnter={() => setOpen(true)}>
        {menuName} <FaChevronDown size={12} />
      </button>

      <ItemList open={open}>
        {items.map(item => (
          <Item key={item.id}>{item.element}</Item>
        ))}
      </ItemList>
    </Container>
  );
};

export default Dropdown;
