import {FaMoneyBill} from "react-icons/fa"
import {RiGroupFill} from "react-icons/ri"
import {AiFillTags} from "react-icons/ai"


export const sideBarItems = [
    {
        name: 'Verify',
        icon: <RiGroupFill className="text-xl"/>,
        path: '/',
    },{
        name: 'Deals',
        icon: <AiFillTags className="text-xl"/>,
        path: '/deals',
    },{
        name: 'Transactions',
        icon: <FaMoneyBill className="text-xl"/>,
        path: '/transactions',
    }
]