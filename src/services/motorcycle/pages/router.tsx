import {Route} from "react-router-dom";
import Index from "./index/index";
import Penalty from "./penalty/penalty";
const MotorcycleRoute=()=>{
    return(
        <>          
            <Route path="/motorcycle/" element={<Index/>}></Route>
            <Route path="/motorcycle/penalty" element={<Penalty/>}></Route>
        </>

    )
}
export default MotorcycleRoute;