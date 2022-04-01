import React from 'react';
import Logo from './Sources/Icon/Logo.png';
import './Style/LeftRow.css';
import LeftMenuComponent from './Components/LeftMenuComponent';
import { TextStyled } from '../Styled/CommonStyled';
import { Left } from './Style/LeftMenuStyled';


export default function LeftRow (props){

    console.log("$ LeftMenu");

    return(
        <Left>
            <table className="Logo"><tbody><tr>
                <td><img src={Logo} className="LogoIcon" alt="logo"/></td>
                <td className="LogoText">
                    <TextStyled className="inMusic"  style={{paddingLeft:5}}>inMusic</TextStyled>
                    <div className="AppUiKit" style={{paddingLeft:5}}>App UI Kit</div>
                </td>
            </tr></tbody></table>
            <div className="LeftMenu">
                <LeftMenuComponent
                    Theme={props.Theme}
                    CurrentContent={props.CurrentContent}
                    SetCurrentContent={props.SetCurrentContent}
                    ScreenWidth={props.ScreenWidth}
                />
            </div>
        </Left>
    );
}