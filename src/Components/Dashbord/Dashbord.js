import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import DashbordHome from './DashbordHome/DashbordHome';
import MakeAdim from './MakeAdmin/MakeAdim';
import useAuth from '../../Hook/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Pay from './Pay/Pay';
import MyOrders from '../MyOrder/MyOrder';
import AddComment from '../Comments/AddComment/AddComment';
import './Dashbord.css';
import Addproduct from '../ManageAllOrder/AddProduct/Addproduct';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const drawerWidth = 240;

const Dashbord = (props) => {
    const {admin, user, logOut} = useAuth();
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="dashbor-link">
      <Toolbar />
      <Divider />
      <button onClick={logOut} className="car-bttn ms-3 mb-1 mt-3">LogOut</button>
      <br />
      <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to="/home"><Button color="inherit">Home</Button></Link>
      <br />
      { user.email && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`${url}/pay`}><Button color="inherit">Payment</Button></Link>}
      <br />
      { user.email && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`${url}/addreview`}><Button color="inherit">Add Review</Button></Link>}
      <br />
      
      { user.email && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`${url}/myorder`}><Button color="inherit">My Order</Button></Link>}
      <br />
      <Divider />
      { admin && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`${url}/manageallOrders`}><Button color="inherit">All Orders</Button></Link>}
      <br />

      { admin && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black"}} to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>}
      <br />
      { admin && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black"}} to={`${url}/addproduct`}><Button color="inherit">Add Products</Button></Link>}
      <br />
      { admin && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black"}} to={`${url}/manageproduct`}><Button color="inherit">Manage Products</Button></Link>}
      <br />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "black" }}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Deshbord
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Switch>
                <Route exact path={path}>
                    <DashbordHome></DashbordHome>
                </Route>
                <Route path={`${path}/pay`}>
                    <Pay></Pay>
                </Route>
                <Route path={`${path}/myorder`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/addreview`}>
                    <AddComment></AddComment>
                </Route>
                <Route path={`${path}/manageallOrders`}>
                    <ManageAllOrder></ManageAllOrder>
                </Route>
                <AdminRoute path={`${path}/makeadmin`}>
                    <MakeAdim></MakeAdim>
                </AdminRoute>
                <AdminRoute path={`${path}/addproduct`}>
                    <Addproduct></Addproduct>
                </AdminRoute>
                <AdminRoute path={`${path}/manageproduct`}>
                    <DeleteProduct></DeleteProduct>
                </AdminRoute>
            </Switch>
          
        </Box>
      </Box>
    );
  };


export default Dashbord;


