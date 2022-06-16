import {FaMoneyBill} from "react-icons/fa"
import {RiGroupFill} from "react-icons/ri"
import {AiFillTags} from "react-icons/ai"


export const sideBarItems = [
    {
        name: 'Verify',
        icon: <RiGroupFill/>,
        path: '/',
    },{
        name: 'Deals',
        icon: <AiFillTags/>,
        path: '/deals',
    },{
        name: 'Transactions',
        icon: <FaMoneyBill/>,
        path: '/transactions',
    }
]