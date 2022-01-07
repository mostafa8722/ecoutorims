import Search from "./Search"
const Banner = (props)=>{
    return (
        <>
            <div className="image-banner" >
                <div className="row ">
                    <div className="col-sm-12 mt-5">
                        <h1 className="text-white text-center">
                            کومه گردی، مرجع تخصصی رزرو و اجاره اقامتگاه بوم گردی، ویلا، خانه سنتی و روستایی در شمال و سراسر ایران
                        </h1>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-sm-12  mt-5 d-flex justify-content-center">
                        <Search/>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;