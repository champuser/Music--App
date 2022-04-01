import React ,{ Suspense,lazy} from 'react';
import data from '../../Additional/data';
import ReactPlayer from "react-player";
import { VideoList } from "../Style/ContentStyled";
import '../Style/Content.css';
import { TextStyled } from '../../Styled/CommonStyled';
import { ReactComponent as MoreIcon} from '../../Additional/assets/More.svg';

export default function FeaturedVideo(props){
    return(
        <Suspense fallback={<h1>Loading Please wait...</h1>}>
             <div  className="video-item">
            <table className="FeaturedVideosTable"><tbody>
            <tr>
                <td className="FeaturedVideosTableHeading" style={{paddingLeft:5}}><TextStyled>Featured Videos</TextStyled></td>
                <td className="FeaturedVideosTableMore"><MoreIcon /></td>
            </tr>
            </tbody></table>
                
                <div className="HideScrollBar">
                <VideoList ScreenWidth={props.ScreenWidth} Width={690}>{
                data.FeaturedVideos1.filter((val) => {
                    if(props.SearchTerm === ""){return val}
                    else if(val.name.toLowerCase().includes(props.SearchTerm.toLowerCase())){return val}
                }).slice(0,4).map((FeaturedVideo) => {
                return (
                    <div className="GridView"  key={FeaturedVideo.id}>
                        <table className="GridViewTable" ><tbody>
                            <tr><td><ReactPlayer  width="100%" height="auto"  url={FeaturedVideo.Link} /></td></tr>
                            <tr><td>
                                <div className="FeaturedVideoName" style={{paddingLeft:3}}><TextStyled>{FeaturedVideo.name}</TextStyled></div>
                                <div className="FeaturedVideoArtist" style={{paddingLeft:3}}>{FeaturedVideo.description} </div>
                            </td></tr>
                        </tbody></table>
                    </div>
                );
                })
            }
            </VideoList>
            </div>

               
           
        </div>

   

        </Suspense>
       
                
    );
}