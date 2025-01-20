import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { routhPath } from '../routes/Route';


const StyledAppBar = styled(AppBar)({
    background : '#2d2d2d',
    height: 64,
    '& > div > *': {
        marginRight: 20,
        fontSize: 14,
        color: 'inherit',
        textDecoration: 'none'
    }
})

const Header = () =>{

    const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return (
        <StyledAppBar>
            <Toolbar>
                <Link to={routhPath.home}>
                    <img src = {logo} alt="logo" style = {{width : 95, marginBottom : 6}}/>
                </Link>
                <Link to={routhPath.create}>Post Job</Link>
                <Link to={routhPath.posts}>Find Jobs</Link>
                
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;