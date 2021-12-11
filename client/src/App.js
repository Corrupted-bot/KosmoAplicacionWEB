import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.scss';
import NavbarNav from './components/NavbarNav';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Empresas from "./pages/Empresas";
import ViewData from "./pages/ViewData";
import EditData from "./pages/EditData";
import DeleteData from "./pages/DeleteData";
import AuthProvider from './auth/AuthProvider';
import PrivateRouters from "./components/routers/PrivateRouters";
import PublicRouters from "./components/routers/PublicRouters";
import DeleteProject from "./pages/DeleteProject";
import EditProject from "./pages/EditProject";
import PuestoTrabajo from "./pages/PuestoTrabajo";

function App() {
  return (
    <AuthProvider>

      <Router>
        <div className="flex">
          <Sidebar />
          <div className="content w-100">
            <NavbarNav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route exact path='/login' element={<PublicRouters />}>
                <Route path='/login' element={<Login />} />
              </Route>
              <Route exact path='/clients' element={<PrivateRouters />}>
                <Route path='/clients' element={<Clients />} />
              </Route>
              <Route exact path='/projects' element={<PrivateRouters />}>
                <Route path='/projects' element={<Projects />} />
              </Route>
              <Route exact path='/register' element={<PrivateRouters />}>
                <Route path='/register' element={<Register />} />
              </Route>
              <Route exact path='/companies' element={<PrivateRouters />}>
                <Route exact path='/companies' element={<Empresas />} />
              </Route>
              <Route exact path='/companies/:id/view' element={<PrivateRouters />}>
                <Route exact path='/companies/:id/view' element={<ViewData />} />
              </Route>
              <Route exact path='/companies/:id/edit' element={<PrivateRouters />}>
                <Route exact path='/companies/:id/edit' element={<EditData />} />
              </Route>
              <Route exact path='/companies/:id/delete' element={<PrivateRouters />}>
                <Route exact path='/companies/:id/delete' element={<DeleteData />} />
              </Route>
              <Route exact path='/companies/:id/view/projects/:idproyectos' element={<PrivateRouters />}>
                <Route exact path='/companies/:id/view/projects/:idproyectos' element={<Projects />} />
              </Route>
              <Route exact path='/companies/:id/delete/projects/:idproyectos' element={<PrivateRouters />}>
                <Route exact path='/companies/:id/delete/projects/:idproyectos' element={<DeleteProject />} />
              </Route>
              <Route exact path='/companies/:id/edit/projects/:idproyectos' element={<PrivateRouters />}>
                <Route exact path='/companies/:id/edit/projects/:idproyectos' element={<EditProject />} />
              </Route>
              <Route exact path='/companies/:id/view/projects/:idproyectos/puestotrabajo' element={<PrivateRouters />}>
                <Route exact path='/companies/:id/view/projects/:idproyectos/puestotrabajo' element={<PuestoTrabajo />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
