import {
    Route, Routes,
  } from "react-router-dom";
import { routeList,RouteListModel } from "./routes";
import Home from "./../home";
const RouterListRender=()=>{
    return(
        <Routes>    
            <Route path="/" element={<Home/>}></Route>
            {
                routeList.map((item:RouteListModel,index)=><Route key={index}>{item.render()}</Route>)
            }
            <Route path="*" element={<div>not found</div>}></Route>
        </Routes>
    )
}
export default RouterListRender;