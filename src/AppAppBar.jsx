import * as React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DrawIcon from '@mui/icons-material/Draw';

const logoStyle = {
  width: '80px',
  height: '30px',
  cursor: 'pointer',
  color: '#24f9fe',
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position='fixed'
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar
            variant='regular'
            sx={() => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <DrawIcon sx={logoStyle} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }} color='white'>
                <MenuItem onClick={() => {}} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant='body2'>I</Typography>
                </MenuItem>
                <MenuItem onClick={() => {}} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant='body2'>Love</Typography>
                </MenuItem>
                <MenuItem onClick={() => {}} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant='body2'>My</Typography>
                </MenuItem>
                <MenuItem onClick={() => {}} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant='body2'>Wife</Typography>
                </MenuItem>
                <MenuItem onClick={() => {}} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant='body2'>{'<3'}</Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button color='primary' variant='text' size='small' component='a'>
                Cool project
              </Button>
              <Button
                color='primary'
                variant='contained'
                size='small'
                component='a'
              >
                Right?
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant='text'
                color='primary'
                aria-label='menu'
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: '#000',
                    flexGrow: 1,
                  }}
                  color='white'
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <CloseIcon onClick={toggleDrawer(false)} />
                  </Box>
                  <MenuItem onClick={() => {}}>I</MenuItem>
                  <MenuItem onClick={() => {}}>Love</MenuItem>
                  <MenuItem onClick={() => {}}>My</MenuItem>
                  <MenuItem onClick={() => {}}>Wife</MenuItem>
                  <MenuItem onClick={() => {}}>{'<3'}</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color='primary'
                      variant='contained'
                      component='a'
                      sx={{ width: '100%' }}
                    >
                      Cool project
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color='primary'
                      variant='outlined'
                      component='a'
                      sx={{ width: '100%' }}
                    >
                      Right?
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
