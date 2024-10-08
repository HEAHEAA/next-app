const Sidebar = () => {
    return (
        <div style={{ width: '200px', borderRight: '1px solid #ddd', padding: '10px' }}>
            <h2>Sidebar</h2>
            <ul>
                <li><a href="/home">home</a></li>
                <li><a href="/about">about</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
