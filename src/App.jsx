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

export default function App() {
  return (
    <>
      {/* <Index /> */}
      <B>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/rtl' element={<Rtl />} />
          <Route path='/virtual_reality' element={<Virtual_reality />} />
          <Route path='/sign_up' element={<Sign_up />} />
          <Route path='/sign_in' element={<Sign_in />} />
          <Route path='/user_management/permission' element={<Permission />} />
          <Route path='/user_management/roles' element={<Role />} />
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