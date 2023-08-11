import { MenuItem, styled, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';
import { pages } from '@src/layout/Navbar/components/pages';
const NavItem = styled(MenuList)(() => ({
  display: 'flex',
}));
const NavLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#333',
}));
export const Mainbar = () => {
  return (
    <NavItem>
      {pages.map((page, index) => (
        <MenuItem key={index}>
          <NavLink to={page.path}>{page.title}</NavLink>
        </MenuItem>
      ))}
    </NavItem>
  );
};
