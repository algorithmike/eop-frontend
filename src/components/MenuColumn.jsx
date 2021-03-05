import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../styles/MenuColumn.scss';

const MenuColumn = () => {
    return (
        <div className="menuColumn">
            <div>This is the Menu Column</div>
            <Link to="/about">
                <Button>About</Button>
            </Link>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/Help">
                <Button>Help</Button>
            </Link>
            <Link to="/">
                <Button>Test Results Page</Button>
            </Link>
            <Link to="/test">
                <Button>Test 404 Page</Button>
            </Link>
            <Link to="/upload">
                <Button>Test Upload</Button>
            </Link>
        </div>
    )
}

export default MenuColumn