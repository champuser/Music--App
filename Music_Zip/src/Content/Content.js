import React,{Suspense,lazy} from 'react';
import './Style/Content.css';
import FeaturedMusicComponent from './Components/FeaturedMusic';
import PopularArtistsComponent from './Components/PopularArtists';
import SearchMenuComponent from './Components/SearchMenu';
import {HomePageRight} from './Style/ContentStyled';
import PodCastAPI from './Podcast/PodcastAPI';
const FeaturedVideoComponent = lazy(() => import('./Components/FeaturedVideo'));

export default function Content (props){
    
    const [Search, SetSearch] = React.useState("");
    
    function SetCurrentContent(){
        if(props.CurrentContent === "Videos"){
            return(
                <Suspense fallback={<h1>Loading Videos...</h1>}>
                    <FeaturedVideoComponent SearchTerm={Search} ScreenWidth={props.ScreenWidth}/>
                </Suspense>
            );
        }else if(props.CurrentContent === "Music"){

            return(<FeaturedMusicComponent SetCurrentMusic={props.SetCurrentMusic} SearchTerm={Search} ScreenWidth={props.ScreenWidth}/>);

            
        }else if(props.CurrentContent === "Podcasts"){
            return(
            <Suspense fallback={<h1>Loading Podcasts...</h1>}>
                < PodCastAPI SetCurrentMusic={props.SetCurrentMusic} SearchTerm={Search} ScreenWidth={props.ScreenWidth}/>
                </Suspense>

       
            )}
       
        else{
            return(
                <Suspense fallback={<h1>Loading Videos...</h1>}>
                    <FeaturedVideoComponent SearchTerm={Search} ScreenWidth={props.ScreenWidth}/>
                </Suspense>

            )
           
        }
    }

    return(
        <HomePageRight>
            <div className="TopMenu"><SearchMenuComponent SetCurrentTheme={props.SetCurrentTheme} Theme={props.Theme} SetSearchTerm={SetSearch}/></div>
            <div className="FeaturedVideos"><SetCurrentContent/></div>
            <div className="PopularArtists"><PopularArtistsComponent ScreenWidth={props.ScreenWidth}/></div>
        </HomePageRight>
    );
}

