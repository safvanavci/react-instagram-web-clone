import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import DotIcon from "../icons/DotIcon";

export default function HeaderPost() {
  return (
    <div className='flex items-center border-b border-border justify-between' >
      <NavLink to='/profile'>
        <div className='flex items-center my-2 ml-3 mr-1  w-full flex-1'>
          <div className='rounded-full overflow-hidden'>
            <img className='w-8 h-8' src={avatar} />
          </div>
          <div className='text-sm font-semibold ml-2.5'>
            username
          </div>
        </div>
        </NavLink>
      <div className='w-11 h-10 p-2 mr-1' >
        <DotIcon />
      </div>
    </div>
  )
}
