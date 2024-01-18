interface IItems {
  id?: number;
  element?: React.ReactNode;
}

export interface IDropdown {
  menuName: string;

  items: IItems[];

  notVisible?: boolean;
}

export interface IItemListContainer {
  open: boolean;
}

export interface IContainerProps {
  menuColorHover?: string;
  notVisible?: boolean;
  open?: boolean;
}
