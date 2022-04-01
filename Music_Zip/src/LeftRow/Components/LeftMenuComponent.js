import React from 'react';
import AddIcon from '../Sources/Icon/AddIcon.png';
import data from '../../Additional/data.json';
import { TextStyled } from '../../Styled/CommonStyled';

export default function LeftMenuComponent(props){
    console.log("$ LeftMenuComponent");

    const PlusButton = (arg) => {
        if(arg.Name === "Playlists"){
            return(<img src={AddIcon} className="LeftMenuTableImage" alt="PlusIcon"/>);
        }else{
            return(<div></div>);
        } 
    }

    if(props.ScreenWidth > 600){
        return(
            <table><tbody>
                {
                    data.LeftMenu.map((Menu) => {
                        if(Menu.Name === props.CurrentContent){
                            return(
                                <tr className="LeftMenuTableOnMouseOver" key={Menu.id}>
                                    <td className="LeftMenuTableImage"><img className="LeftMenuTableIcon" src={Menu.Image.Pink} alt={Menu.Name}/></td>
                                    <td className="LeftMenuTableTextPinkColor">{Menu.Name}</td>
                                    <td className="LeftMenuTableImageAdditional"><PlusButton Name={Menu.Name}/></td>
                                    <td className="LeftMenuTableRightPinkColor"></td>
                                </tr>
                            );
                        }else{
                            return(
                                <tr className="LeftMenuTableOnMouseOver" key={Menu.id} onClick={() => props.SetCurrentContent(Menu.Name)}>
                                    <td className="LeftMenuTableImage"><img className="LeftMenuTableIcon" src={ Menu.Image.Light} alt={Menu.Name}/></td>
                                    <td className="LeftMenuTableText" ><TextStyled>{Menu.Name}</TextStyled></td>
                                    <td className="LeftMenuTableImageAdditional" style={{paddingRight:12}}><PlusButton Name={Menu.Name} Theme={props.Theme}/></td>
                                    <td className="LeftMenuTableRight" ></td>
                                </tr>
                            );
                        }
                        
                    })
                }
                <tr>
                    <td></td>
                    <td className="LeftMenuPlayLists">{
                        data.Playlists.map((playlists) => {
                            return(<div>{playlists.Name}</div>)
                        })
                    }</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody></table>
        )
    }else{
        return(
            <table><tbody>
            {
                data.LeftMenu.map((Menu) => {
                    if(Menu.Name === props.CurrentContent){
                        return(
                            <tr className="LeftMenuTableOnMouseOver" key={Menu.id}>
                                <td className="LeftMenuTableImage"><img className="LeftMenuTableIcon" src={Menu.Image.Pink} alt={Menu.Name}/></td>
                                <td></td>
                                <td className="LeftMenuTableRightPinkColor"></td>
                            </tr>
                        );
                    }else{
                        return(
                            <tr className="LeftMenuTableOnMouseOver" key={Menu.id} onClick={() => props.SetCurrentContent(Menu.Name)}>
                                <td className="LeftMenuTableImage"><img className="LeftMenuTableIcon" src={ Menu.Image.Light} alt={Menu.Name}/></td>
                                <td></td>
                                <td className="LeftMenuTableRight" ></td>
                            </tr>
                        );
                    }
                    
                })
            
            }
            </tbody></table>
        )
    }
}