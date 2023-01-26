import './Navbar.css';

export default function Navbar() {
    return <nav className="nav">
        
       

        <a href = "/home" className="site-title">Vektor</a>
        <ul>
            <CustomLink href = "/pricing" >Pricing</CustomLink>
            <CustomLink href = "/about" >About</CustomLink>
            <CustomLink href = "/video" >Video</CustomLink>
            <CustomLink href = "/photo" >Photo</CustomLink>
            <CustomLink href = "/sign" >Sign Up</CustomLink>
    
        </ul>
    </nav>
}

function CustomLink ({href, children, ...props}) {
    const path = window.location.pathname;
    
    return (
        <li className = {path === href ? "active" : " "}>
            <a href = {href} {...props} > {children}</a>  
        </li>
    )
}