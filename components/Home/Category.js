
const category = (props)=>{
    return (
        <>
            <div className="main-category">
                <img src={`images/category/${props.img}.svg`}/>
                <span className="mt-2 font-bold font-13 ">{props.title}</span>
            </div>
        </>
    )
}
export  default category;