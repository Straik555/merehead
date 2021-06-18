//Core
import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

//Routes
import {routes} from '../../_utils/Routes';

//Design
import { Menu } from 'antd';

//Icon
import {
    AppstoreOutlined,
    UserAddOutlined,
} from "@ant-design/icons";


const { Item } = Menu;

const Header = ({isLogin, user, userLogOut}) => {
    // const {isLogin, user} = useSelector((state) => ({...state.userReducer}))

    const location = useLocation();
    const [current, setCurrent] = useState(routes.home);
    useEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname])
    const handleClick = e => {
        setCurrent(e.key)
    }
    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
        >
            <Item
                key={routes.home}
                icon={<AppstoreOutlined />}
                className={'float-right'}
            >
                <Link to={routes.home}>
                    Home
                </Link>
            </Item>

            <Item
                key={routes.register}
                icon={<UserAddOutlined />}
                className={'float-right'}
            >
                <Link to={routes.register}>Register</Link>
            </Item>
        </Menu>
    )

}

export default Header;
