const Navbar = ({ navs }) => {

    const navItems = navs.map((navItem, index) => {
        return <a href={navItem.href} key={`${navItem.href}-${index}`}>{navItem.text}</a>
    })
    return (
        <h1 className="nav-bar">{navItems}</h1>
    )
};

export default Navbar