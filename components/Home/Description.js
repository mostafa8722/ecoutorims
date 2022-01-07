const Description = (props)=>{
    return (
        <>
            <div className="main-description">
                <img src={`images/description/${props.img}.svg`}/>
                <span className="mt-3 font-bold font-13 text-center">{props.title}</span>
                <span className="mt-3 font-13 text-center line-height-25">{props.description}</span>

            </div>
        </>
    );
}
export  default Description;