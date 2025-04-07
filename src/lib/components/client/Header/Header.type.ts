export interface HeaderButtonProps {
  icon?: React.ReactNode;
  onClick: () => void;
}

export interface HeaderProps {
  title: string;
  leftButton?: HeaderButtonProps;
  rightButton?: HeaderButtonProps;
}

