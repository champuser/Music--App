import React, { useEffect, useState ,lazy,Suspense} from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, Main } from "./Additional/Theme";



const LeftRow = lazy(() => import('./LeftRow/LeftRow'));
const Content = lazy(() => import('./Content/Content'));
const SongPlayer = lazy(() => import('./SongPlayer/SongPlayer'));



const  useWindowSize = () =>{
    const [Size, SetSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleSize = () => {
            SetSize(window.innerWidth);
        };
        window.addEventListener("resize", handleSize);
    },[]);
    return Size;
}

export default function App(props) {
    const alignItem = useWindowSize();
    const [CurrentMusic, SetCurrentMusic] = useState(" Not Playing");
    const [CurrentContent, SetCurrentContent] = useState("Podcasts");
    return (
    <ThemeProvider theme={ lightTheme}>
        <Main />
        <Suspense fallback={<h1>Loading...</h1>}>
           <LeftRow CurrentContent={CurrentContent} SetCurrentContent={SetCurrentContent} ScreenWidth={alignItem}/>
           <Content SetCurrentMusic={SetCurrentMusic} CurrentContent={CurrentContent} ScreenWidth={alignItem}/>
           <SongPlayer CurrentMusic={CurrentMusic} SetCurrentMusic={SetCurrentMusic} ScreenWidth={alignItem}/>
        </Suspense>
       
    </ThemeProvider>
    );
}


