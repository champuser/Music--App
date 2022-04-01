import React from 'react';
import SearchIcon from '../Sources/Icon/SearchIcon.png';
import SettingsIcon from '../Sources/Icon/SettingsIcon.png';
import NotificationIcon from '../Sources/Icon/NotificationIcon.png';
import ModeIconDark from '../Sources/Icon/ModeIconDark.png';
import ModeIconLight from '../Sources/Icon/ModeIconLight.png';
import '../Style/Content.css';

export default function SearchMenu(props){
    const themeToggler = () => {
        console.log("Theme changed");
        props.SetCurrentTheme(props.Theme === "dark" ? "light" : "dark");
    };

    return(
        <table className="TopMenuTable"><tbody>
            <tr>
                <td className="TopMenuTableIcon"><img src={SearchIcon} className="TopMenuIcon" alt="SearchIcon"/></td>
                <td className="TopMenuTableSearch">
                    <input className={props.Theme === "dark" ? "TopMenuSearchDark" : "TopMenuSearchLight"} type="search" placeholder="Search for artists, songs & albums..." onChange={e => {props.SetSearchTerm(e.target.value)}}/>
                </td>
                <td className="TopMenuTableIcon"><img src={SettingsIcon} style={{paddingRight:35}} className="TopMenuIcon" alt="SettingIcon"/></td>
                <td className="TopMenuTableIcon"><img src={NotificationIcon} className="TopMenuIcon" alt="NotificationIcon"/></td>
            </tr>
        </tbody></table>
    );
}