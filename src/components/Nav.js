function Nav(props) {
    const mainLinks = [
        {
            name:"Home",
            href:"/"
        },
        {
            name:"Search",
            href:"/search"
        },
        {
            name:"Your Library",
            href:"/library"
        },
    ]
    const navListItems = mainLinks.map(link => {
        return <li><a href={link.href}>{link.name}</a></li>
    })

    return (
        <div className="Nav">
            <ul>{navListItems}</ul>
        </div>
    );
}

export default Nav;