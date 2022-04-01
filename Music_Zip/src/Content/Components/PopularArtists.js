import React, { useState } from 'react';
import data from '../../Additional/data';
import '../Style/Content.css';
import { TextStyled } from '../../Styled/CommonStyled';
import {ReactComponent as MoreIcon} from '../../Additional/assets/More.svg';

export default function PopularArtists(props){

    console.log("$ Popular Artists");
    const [PopularArtistsShowMoreList, SetPopularArtistsShowMoreList] = useState(6);

    function PopularArtistsShowMore(){
        if(document.getElementById("ShowMoreIcon").innerHTML === "show more"){
            document.getElementById("ShowMoreIcon").innerHTML = "show less";
            SetPopularArtistsShowMoreList(10);
        }else{
            document.getElementById("ShowMoreIcon").innerHTML = "show more";
            SetPopularArtistsShowMoreList(6);
        }
    }

    if(props.ScreenWidth > 600){
        return(
            <div>
                <div className="PopularArtists1">
                    <table className="PopularArtistsTable1"><tbody>
                        <tr>
                            <td className="PopularArtistsTable1_1"><TextStyled>Popular Artists</TextStyled></td>
                            <td className="PopularArtistsTable1_2" onClick={(e)=>PopularArtistsShowMore()} id="ShowMoreIcon">show more</td>
                        </tr>
                    </tbody></table>
                </div>
                <div className="PopularArtists2" style={{paddingTop:3}}>
                    <table className="PopularArtistsTable2"><tbody>{
                        data.PopularArtists.slice(0,5).map((PopularArtist) => {
                            return (
                                <tr key={PopularArtist.id}>
                                    <td className="PopularArtistsTable2_1"><img src={PopularArtist.Link} className="PopularArtistsTable2_1_Icon" alt={PopularArtist.Name}></img></td>
                                    <td className="PopularArtistsTable2_2">
                                        <div className="PopularArtistsTable2_2_1"><TextStyled>{PopularArtist.Name}</TextStyled></div>
                                        <div className="PopularArtistsTable2_2_2">{PopularArtist.Followers} Followers</div>
                                    </td>
                                    <td className="PopularArtistsTable2_3"><MoreIcon/></td>
                                </tr>
                            );
                        })
                    }</tbody></table>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <div className="PopularArtists1">
                    <table className="PopularArtistsTable1"><tbody>
                        <tr>
                            <td className="PopularArtistsTable1_1"><TextStyled>Popular Artists</TextStyled></td>
                        </tr>
                    </tbody></table>
                </div>
                <div className="PopularArtists2">
                    <table className="PopularArtistsTable2"><tbody>{
                        data.PopularArtists.map((PopularArtist) => {
                            return (
                                <tr key={PopularArtist.id}>
                                    <tr className="PopularArtistsTable2_1"><img src={PopularArtist.Link} className="PopularArtistsTable2_1_Icon" alt={PopularArtist.Name}/></tr>
                                    <tr className="PopularArtistsTable2_2">
                                        <div className="PopularArtistsTable2_2_1"><TextStyled>{PopularArtist.Name}</TextStyled></div>
                                        <div className="PopularArtistsTable2_2_2">{PopularArtist.Followers} Followers</div>
                                    </tr>
                                </tr>
                            );
                        })
                    }</tbody></table>
                </div>
            </div>
        )
    }
}