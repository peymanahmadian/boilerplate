//routers
import CarRoute from "../services/car/pages/router"
import MotorcycleRoute from "../services/motorcycle/pages/router"
//
export interface RouteListModel{
    render:any
}
export const routeList:RouteListModel[]=[
    {render:CarRoute},
    {render:MotorcycleRoute}
]