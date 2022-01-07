import Category from "./Category"
const categories = ()=>{
    return (
        <>
            <div className="main-categories">
                <h2 className="font-bold font-18">دسته بندی </h2>

                <div className="row d-flex mt-2">
                    <Category key={0} img="discounted-gradiant" title="با تخفیف" />
                    <Category key={1} img="economy-gradiant" title="اقتصادی" />
                    <Category key={2} img="villapool-gradiant" title="استخردار" />
                    <Category key={3} img="birthday-gradiant" title="مهمانی و تولد" />
                    <Category key={4} img="beach-gradiant" title="ساحل جنوب" />
                    <Category key={5} img="wetland-gradiant" title="بوم گردی" />
                    <Category key={6} img="winter-gradiant" title="سفر در زمستان " />
                    <Category key={7} img="north" title="اقامتگاه شمال" />

                </div>
            </div>

        </>
    )
}
export default categories;