export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <NavLists />
        </nav>
    )
}

function NavLists() {
    return (
        <ul>
            <NavList name="home" link="#" />
            <NavList name="about" link="#" />
            <NavList name="projects" link="#" />
            <NavList name="contact" link="#" />
        </ul>
    )
}

function NavList({ name, link }) {
    return (
        <a href={link}>
            <li>{name}</li>
        </a>
    )
}