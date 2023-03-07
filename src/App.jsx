import logoBregma from "./assets/logo/Logo-bregma.svg";
import avatar from "./assets/logo/avatar.svg";
import Content from "./components/Content/Content";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="menu">
        <div className="menu_logo">
          <img src={logoBregma} alt="logo" className="img-fluid" />
        </div>
        <div className="menu_content">
          <div className="menu_content_details">
            <ul>
              <li>Perfil</li>
              <li>Productos y servicios</li>
              <li>Operaciones</li>
              <li>Ventas</li>
              <li>Recursos Humanos</li>
              <li>Contabilidad</li>
              <li>Estadísticas</li>
              <li>Soporte técnico</li>
            </ul>
            <p>Cerrar Sesión</p>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="nav-body">
          <div className="body_content">
            <h1>Recursos Humanos</h1>
            <p>En este módulo usted podrá realizar la gestión de recursos humanos de Bregma.</p>
          </div>
          <div className="body_form">
            <input type="text" className="form-control" />
            <img src={avatar} alt="avatar" />
            <input type="text" placeholder="Notificaciones" className="form-control" />
          </div>
        </div>
        <div className="body-content_image">

        <Content/>
          {/* 
            <div className="position-absolute bottom-0 end-0 ">
              <img className="img-fluid avatar" src={avatar2} alt="avatar"/>
            </div>
            <div className="position-absolute bottom-0 end-0 elipse">
              <img src={ellipse1} className="img-fluid" alt="elipse"/>
            </div>
            */}
        </div>
      </div>
    </div>
  );
}

export default App;
