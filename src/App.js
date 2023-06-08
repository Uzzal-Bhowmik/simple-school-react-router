import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { loader } from './utilities/dataLoader';
import ClgFacility from './components/ClgOption/ClgFacility';
import DynamicFacility from './components/DynamicFacility/DynamicFacility';
import { createContext } from 'react';


// creating a context api
export const AuthorContext = createContext('default');


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          loader: loader,
          element: <Home />
        },
        {
          path: "/courses",
          element: <Courses />
        },
        {
          path: "/facility/:facilityTitle",
          loader: async ({ params }) => {
            const facilities = await (await fetch("/college-facilities.json")).json();
            const dynamicFacility = facilities.find(fc => fc.title === params.facilityTitle);
            return dynamicFacility;
          },
          element: <DynamicFacility />
        }
      ]
    }
  ]);



  return (
    <AuthorContext.Provider value="Uzzal Bhowmik">
      <RouterProvider router={router}></RouterProvider>
    </AuthorContext.Provider>

  );
}

export default App;
