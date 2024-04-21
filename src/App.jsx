import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

//Pages
import About from './Pages/About'
import Home from './Pages/Home'
import Faq from './Pages/help/Faq'
import Contact from './Pages/help/Contact'
import NotFound from './Pages/help/NotFound'
import Profile, { profileLoader } from './profiles/Profile'

//Layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProfileLayout from './layouts/ProfileLayout'

const routesFromElements = createRoutesFromElements(
    <Route path="/" element ={<RootLayout />}>
        <Route index element ={<Home />}/>
        <Route path="about" element ={<About />}/>
        <Route path='help' element= { <HelpLayout />}>
            <Route path ="faq" element ={<Faq />}/>
            <Route path ="contact" element ={<Contact />}/>
        </Route>
        <Route
                path="profiles"
                element={<ProfileLayout />}
            >
                <Route index element={<Profile />} loader={profileLoader} />
            </Route>

            <Route path="*" element={<NotFound />} />
    </Route>
);

const router = createBrowserRouter(routesFromElements);

function App() {
    return (
        <div className="App">
           <RouterProvider router={router}/>   
        </div>
    )
}

export default App
