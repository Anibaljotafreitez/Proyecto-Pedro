import React from 'react'
import { Route, Routes } from 'react-router'
import { ScrollPage } from '../pages/ScrollPage'
import { MausePage } from '../pages/MausePage'
import { HomePages } from '../pages/HomePages'
import { InfoPage } from '../pages/InfoPage'

export const RouterApp = () => { 
    

  return (
    <Routes>
         <Route path='/scroll' element={ <ScrollPage/> } />
         <Route path='/mause'  element={ <MausePage/> } />
         <Route path='/*'      element={ <HomePages/> } />
         <Route path='/info'   element={ <InfoPage/> } />

    </Routes>

  )
}
