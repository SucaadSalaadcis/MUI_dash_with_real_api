import React from 'react'
import Index from './pages/Index'
import { BrowserRouter as B, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import Rtl from './pages/Rtl'
import Virtual_reality from './pages/Virtual_reality'
import Sign_up from './pages/Sign_up'
import Sign_in from './pages/Sign_in'
import Permission from './pages/permissionManage/Permission';
import Role from './pages/roles/Role';
import Users from './pages/userManage/Users';
import Product from './pages/productManage/Product';
import Agent from './pages/agentManage/Agent';
import Customer from './pages/customerManage/Customer';
import PermissionEdit from './pages/permissionManage/PermissionEdit';
import AgentEdit from './pages/agentManage/AgentEdit';
import CustomerEdit from './pages/customerManage/CustomerEdit';
import ProductEdit from './pages/productManage/ProductEdit';
import RoleEdit from './pages/roles/RoleEdit';
import UserEdit from './pages/userManage/UserEdit';
import Order from './pages/orderManage/Order';
import OrderEdit from './pages/orderManage/OrderEdit';
import PermissionView from './pages/permissionManage/PermissionView';
import AgentView from './pages/agentManage/AgentView';
import ProductView from './pages/productManage/ProductView';
import CustomerView from './pages/customerManage/CustomerView';
import UserView from './pages/userManage/UserView';
import RoleView from './pages/roles/RoleView';
import OrderView from './pages/orderManage/OrderView';
import AgentPost from './pages/agentManage/AgentPost';
import CustomerPost from './pages/customerManage/CustomerPost';

export default function App() {
  return (
    <>

      <B>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/rtl' element={<Rtl />} />
          <Route path='/virtual_reality' element={<Virtual_reality />} />
          <Route path='/sign_up' element={<Sign_up />} />
          <Route path='/sign_in' element={<Sign_in />} />

          <Route path='/user_management/permission' element={<Permission />} />
          <Route path='/permission/:id' element={<PermissionEdit />} />
          <Route path='/permission_view/:id' element={<PermissionView />} />

          <Route path='/user_management/roles' element={<Role />} />
          <Route path='/role/:id' element={<RoleEdit />} />
          <Route path='/role_view/:id' element={<RoleView />} />

          <Route path='/user_management/users' element={<Users />} />
          <Route path='/users/:id' element={<UserEdit />} />
          <Route path='/users_view/:id' element={<UserView />} />

          <Route path='/products' element={<Product />} />
          <Route path='/product/:id' element={<ProductEdit />} />
          <Route path='/product_view/:id' element={<ProductView />} />

          <Route path='/agents' element={<Agent />} />
          <Route path='/agent/:id' element={<AgentEdit />} />
          <Route path='/agent_view/:id' element={<AgentView />} />
          <Route path='/agent_post' element={<AgentPost />} />

          <Route path='/customers' element={<Customer />} />
          <Route path='/customer/:id' element={<CustomerEdit />} />
          <Route path='/customer_view/:id' element={<CustomerView />} />
          <Route path='/cust_post' element={<CustomerPost />} />

          <Route path='/orders' element={<Order />} />
          <Route path='/order/:id' element={<OrderEdit />} />
          <Route path='/order_view/:id' element={<OrderView />} />
        </Routes>
      </B>


      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
            // background: 'green',

          },
        }}
      />
    </>
  )
}
