
import React , { useEffect, useState } from 'react';
import axios from 'axios';
import './PodcastAPI.css';
import { TextStyled } from '../../Styled/CommonStyled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ReactComponent as MoreIcon} from '../../Additional/assets/More.svg';
import { props } from 'bluebird';





// export const fetchData = () => {
//     const episodePromise = fetchEpisodePodcast();

//     return{
//         episode:wrapPromise(episodePromise)
//     }

// }

// const wrapPromise = (promise ) => {
//     // set initial status
//     let status = 'pending';
//     let result;    // store result in it
//     let suspender = promise.then(
//         res=>{
//             status='success';
//             result = res;


//         },
//         err => {
//             status = 'error';
//             result = err;
//         }
//     );

//     return {
//         read(){
//             if(status === 'pending'){
//                 throw suspender;
//             }else if(status === 'error'){
//                 throw result;
//             }else if(status === 'success'){
//                 return result;
//             }
//         }
//     }
// }

// const fetchEpisodePodcast = () => {
//     console.log("Fetching channel from Audioboom API...");
//     return axios.get('https://api.audioboom.com/audio_clips')
//                 .then((res) => res.data)
//                 .catch((err) => console.log(err))
// }


const PodCastAPI = (props) => {

const url = "https://api.audioboom.com/audio_clips";
  const [apiData, setApiData] = useState(null);

  const fetchEpisodeData = async () => {
    const response = await axios({
      method: "get",
      url
    });

    return response.data;
  };
  useEffect(() => {
    fetchEpisodeData()
      .then((val) => {
        setApiData(val);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);



  const Spinner = () => (
    <div className="post loading">
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#49d1e0"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(275.845 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );

  return (
    <>
      <div className="header">
      <p className="podcast-header">List of Podcasts </p>
      <MoreIcon style={{paddingTop:24}} /> 

      </div>
      <div className="podcast-item"> 
      
     {apiData &&
        apiData?.body &&
        apiData.body.audio_clips.filter((value) => {
          if(props.SearchTerm === ""){
            return value;
          }
          else if(value.title.toLowerCase().includes(props.SearchTerm.toLowerCase())){
            return value;
          }
          else{
            return null;
          }
        }).map((item) => {
        return( 
          
        <div className="allDivItem" key={item.id}>
          <div className="podcast1">
           
            <LazyLoadImage 
               effect="blur"
               className="podcast-image" 
               src={item.user.urls['image']}
               placeholderSrc={process.env.PUBLIC_URL  }
            />
            
          </div>
          <p > <a href={item.channel.urls['detail']}  > {item.title}</a></p>
          <p > <h4>Description-: </h4>{item.description}</p>
         </div>
        )
        })}

     

      </div>
      
    </>
  );
};


export default PodCastAPI;



