import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate } from 'react-router-dom';

export default function UserAccount({userRole}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyOrder =()=>{
    navigate('/account/order')
  }
  return (
    <React.Fragment>
      <Tooltip title="User Account">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <AccountCircleRoundedIcon sx={{ width: 30, height: 30 }}/>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

      {/* <Link
        href={route(`${userRole}.dashboard`)}
        href={route(`${userRole}.dashboard`)}
        className={` ${route().current() == `${userRole}.dashboard` ? 'text-theme-primary' : ''} `}
      > */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DvrRoundedIcon fontSize="small"
            //  className={` ${route().current() == `${userRole}.dashboard` ? 'text-theme-primary' : ''} `}
             /> 
          </ListItemIcon>
          Dashboard 
        </MenuItem>
      {/* </Link> */}

        { userRole != "admin" &&
        //   <Link
        //     href={route('order.index')}
        //     className={` ${route().current() == "order.index" ? 'text-theme-primary' : ''} `}
        //   >
            <MenuItem onClick={handleMyOrder}>
              <ListItemIcon>
                <InventoryIcon 
                // className={` ${route().current() == "order.index" ? 'text-theme-primary' : ''} `} fontSize="small"
                /> 
              </ListItemIcon>
              My order
            </MenuItem>
        //   </Link>
        }

        {/* <Link
          method="post" href={route('logout')}
          className={` ${route().current() == "logout" ? 'text-theme-primary' : ''} `}
        > */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" 
            //   className={` ${route().current() == "logout" ? 'text-theme-primary' : ''} `}
              />
            </ListItemIcon>
            Logout
          </MenuItem>
        {/* </Link> */}
      </Menu>
    </React.Fragment>
  );
}
