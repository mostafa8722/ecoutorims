import Link from 'next/link'
import {icon} from "../../utils/helpers";
const Header =()=>{
    return (
        <>
            <div>
                <div className="d-md-flex header-top" >
                   <div className="d-md-flex justify-content-between m-r-10 m-l-10">
                       <h2>
                           کومه گردی
                       </h2>
                       <div>
                           <Link  href="/">
                               <a className="btn-host" >ثبت نام میزبان  </a>
                           </Link>
                           <span className="m-2 cursor-pointer">
                               {icon('support')}
                               <span className="m-r-5">پشتیبانی </span>
                           </span>
                           <span className="m-2 cursor-pointer">
                               {icon('mobile')}
                               <span className="m-r-5">دانلود اپلیکیشن </span>
                           </span>
                           <span className="m-2 cursor-pointer">
                               {icon('Login')}
                               <span>ورود / ثبت نام</span>
                           </span>

                       </div>

                   </div>

                </div>

            </div>
        </>
    )
}

export default  Header;