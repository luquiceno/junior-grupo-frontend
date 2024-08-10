
import { Avatar, Dropdown, Navbar } from "flowbite-react"


function NavMenu() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span 
          className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Langu-App
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar rounded status="online" statusPosition="top-right" />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Usuario Uno</span>
            <span className="block truncate text-sm font-medium">usuarioUno@languapp.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Mi cuenta</Dropdown.Item>
          <Dropdown.Item>Configuración</Dropdown.Item>
          <Dropdown.Item>Soporte</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Cerrar sesión</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          
        </Navbar.Link>
        <Navbar.Link href="/">Mis Actividades</Navbar.Link>
        <Navbar.Link href="/calendario">Mi Calendario</Navbar.Link>
        <Navbar.Link href="/comunidad">Mi Comunidad</Navbar.Link>
        <Navbar.Link href="/otros">Otros</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavMenu