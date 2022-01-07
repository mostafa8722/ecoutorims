import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSlidersH} from "@fortawesome/free-solid-svg-icons";
import SearchIcon from '@material-ui/icons/Search';

const search = ()=>{
    return(
        <>
            <div className="search-box d-flex align-items-center">
                <div className="search-filter">
                    <FontAwesomeIcon style={{fontSize:"15px",height:"15px", marginRight:"10px", marginLeft:"10px",color:"434343"}}  icon={faSlidersH} />
                    <span>فیلتر</span>
                </div>
                <span className="search-divider"></span>
                <div className="search-input">
                    <input placeholder="جستجوی نام اقامتگاه، استان، شهر، روستا، نشانی یا آدرس سایت (در کل سایت)" />
                </div>
                <div className="search-button">
                   <span className="m-l-5 text-white">جستجو</span>
                    <SearchIcon className="text-white" />
                </div>
            </div>
        </>
    )
}
export  default search;