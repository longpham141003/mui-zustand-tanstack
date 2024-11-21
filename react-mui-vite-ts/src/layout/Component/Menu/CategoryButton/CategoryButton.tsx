import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCategoryQuery } from '../../../../hooks/useCategories';
import useCategoryStore from '../../../../store/category.store';
import { buttonSx, menuItemSx, iconSx } from './categoryButton.styles';
import { handleClick, handleClose } from './categoryButton.utils';

const CategoryButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { data, isLoading, isError } = useCategoryQuery();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setAnchorEl(null);  // Đóng menu sau khi chọn category
  };

  if (isLoading) return <Button disabled>Loading...</Button>;
  if (isError) return <Button disabled>Error loading categories</Button>;

  const categories = data || [];

  return (
    <Box>
      <Button
        id="category-button"
        aria-controls={open ? 'category-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event) => handleClick(event, setAnchorEl)}  // Use the utility function
        sx={buttonSx}
      >
        Browse All Categories
        <ExpandMoreIcon sx={{ ml: 1 }} />
      </Button>
      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(setAnchorEl)}  // Use the utility function
        MenuListProps={{
          'aria-labelledby': 'category-button',
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category._id}
            onClick={() => handleCategorySelect(category._id)}  // Handle category selection
            sx={menuItemSx}
          >
            {category.name}
            {selectedCategory === category._id && (
              <ExpandMoreIcon sx={iconSx} />
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CategoryButton;
