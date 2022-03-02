import React from 'react';
import Sidebar from "../SideBar/index";

function Layout(props: any) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{marginLeft: '18rem'}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
