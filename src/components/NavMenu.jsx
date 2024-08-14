
import { Avatar, Dropdown, Navbar } from "flowbite-react"

function NavMenu() {
  return (
    <div className="mb-8">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 py-3">
        <Navbar fluid rounded>
          <Navbar.Brand>
            <span 
              className="self-center whitespace-nowrap text-2xl font-semibold text-blue-500 dark:text-gray">
                APPrende
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
            <Navbar.Link href="/">Mis Actividades</Navbar.Link>
            <Navbar.Link href="/calendario">Mi Calendario</Navbar.Link>
            <Navbar.Link href="/comunidad">Mi Comunidad</Navbar.Link>
            <Navbar.Link href="/otros">Otros</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </div>
  )
}

export default NavMenu