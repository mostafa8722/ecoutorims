import Link from "next/dist/client/link";
import Card from "./Card"


const Cards = ()=>{
    return (
        <>
            <div className="d-flex justify-content-between">
                <h2 className="title-cards">اقامتهای جنگلی </h2>
                <Link  href="/">
                    <a className="" >
                      مشاهده همه
                    </a>
                </Link>
            </div>
            <div>
                <Card  />

            </div>

        </>
    )
}
export  default Cards;