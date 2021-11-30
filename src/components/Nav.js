function Nav(props) {
    const navListItems = props.links.map(link => {
        return <li><a href={link.href}>{link.name}</a></li>
    })

    return (
        <div className="Nav">
            <ul>{navListItems}</ul>
        </div>
    );
}

export default Nav;