import React, { Suspense, lazy } from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export function App() {

  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>

        <NavLink to='/movies'>Movies</NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
            <Route path='/movies/:movieId' element={<MovieDetails />}>
              <Route path='cast' element={<Cast />}></Route>
              <Route path='reviews' element={<Reviews />}></Route>
            </Route>
            <Route path='/movies' element={<Movies />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App;