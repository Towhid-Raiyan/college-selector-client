import { useEffect } from "react";

const setTitle = title =>{
    useEffect(()=>{
    document.title = `College-Selector | ${title}`;
    },[title])
}

export default setTitle;