import {Route} from "react-router-dom";
import Index from "./index/index";
import Penalty from "./panalty/penalty";
const CarRoute=()=>{
    return(
        <>
          
            <Route path="/car/" element={<Index/>}></Route>
            <Route path="/car/penalty" element={<Penalty/>}></Route>
        </>

    )
}
export default CarRoute;