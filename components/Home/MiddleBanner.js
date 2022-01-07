import Link from "next/dist/client/link";


const MiddleBanner =()=>{
    const img = "https://www.otaghak.com/assets/images/homepage-images/north.jpg";
    const styling = {
        backgroundImage: `url('${img}')`,
        width:"100%",
        height:"100%"
    }
    return (
        <>
            <Link  href="/">
                <a className="" >
                 <div style={styling}></div>
                </a>
            </Link>
        </>
    );
}
export  default  MiddleBanner;