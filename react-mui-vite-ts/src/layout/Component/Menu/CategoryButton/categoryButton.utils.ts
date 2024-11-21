import { Dispatch, SetStateAction } from 'react';

export const handleClick = (event: React.MouseEvent<HTMLButtonElement>, setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>) => {
  setAnchorEl(event.currentTarget);
};

export const handleClose = (setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>) => {
  setAnchorEl(null);
};
