import React from 'react';
import data from '../../Additional/data';
import '../Style/Content.css';
import { VideoList } from '../Style/ContentStyled';
import { TextStyled } from '../../Styled/CommonStyled';
import { ReactComponent as MoreIcon } from '../../Additional/assets/More.svg';

export default function FeaturedMusic(props){
    function SendMusicToAudioPlayer(musicData) {
        props.SetCurrentMusic(musicData);
    }
    return(
        <div>
            <table className="FeaturedVideosTable">
                <tbody>
                <tr>
                    <td className="FeaturedVideosTableHeading" style={{paddingLeft:5}}> <TextStyled>Featured Music</TextStyled></td>
                    <td className="FeaturedVideosTableMore"><MoreIcon /></td>
                </tr>
                </tbody>
            </table>
            <div className="HideScrollBar">
                <VideoList ScreenWidth={props.ScreenWidth} >{
                    data.FeaturedMusic.filter((val) => {
                        if(props.SearchTerm === ""){return val}
                        else if(val.Name.toLowerCase().includes(props.SearchTerm.toLowerCase())){return val}
                        
                    }).slice(0,4).map((_FeaturedMusic) => {
                        return (
                            <div className="GridView" key={_FeaturedMusic.id}>
                                <table onClick={() => SendMusicToAudioPlayer(_FeaturedMusic)}><tbody>
                                    <tr><td><img src={_FeaturedMusic.img} alt={_FeaturedMusic.Name} className="ContentGridViewImage" /></td></tr>
                                    <tr>
                                        <td>
                                            <div className="FeaturedVideoName" style={{paddingLeft:5}}><TextStyled>{_FeaturedMusic.Name}</TextStyled></div>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </div>
                        );
                    })
                }</VideoList>
            </div>
        </div>
    );
}
