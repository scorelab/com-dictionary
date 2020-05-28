import React from 'react';
import { Link } from 'react-router-dom';
import { Menu} from 'antd';
import { PlusCircleOutlined , UserOutlined} from '@ant-design/icons';


const { SubMenu } = Menu;

function TitleBar() {
    return (
        <nav >
            <Link to="/"><div className="title"></div></Link>
            <Menu mode="horizontal" className="navbar">
                <Menu.Item key="1">Browse</Menu.Item>
                <Menu.Item key="2">Categories</Menu.Item>
                <Menu.Item key="3">Vote</Menu.Item>
                <Menu.Item key="4">
                    <Link to="/">
                    <PlusCircleOutlined style={{color:"black", fontSize:"28px"}}/>
                    </Link>
                </Menu.Item> 


               

                <SubMenu
                    key="account"
                    title={
                    <span>
                        <UserOutlined style={{color:"black", fontSize:"28px"}}/>
                    </span>
                    }
                    >

                </SubMenu>
            </Menu>
        </nav>

        
    )
}

export default TitleBar