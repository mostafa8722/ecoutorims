import Description from "./Description";

const Descriptions = ()=>{

    const d1 = "تیم کومه گردی، به صورت شبانه‌روزی و در ایام تعطیل آماده پاسخگویی به شما است";
    const d2 = "درصورت لغو رزرو، با توجه به قوانین لغو ضمانت بازگشت هزینه بر عهده کومه گردی است";
    const d3 = "بررسی اطلاعات میزبان‌ها و مهمان‌ها، یکی از مهم‌ترین اقدامات اتاقک است";
    const d4 = "واحدهای اقامتی در اتاقک، از نظر استانداردهای میزبانی و امکانات رفاهی بررسی می‌شوند";
    const d5 = "تمامی میزبان‌های کومه گردی، توسط تیم پشتیبانی مورد آموزش قرار گرفته‌اند";
    const d6 = "کومه گردی مجوزهای لازم برای خدمات گردشگری را با استانداردهای لازم دارد";
    return (
        <>
            <div className="row d-flex">
             <Description key={0} img="support-benefit-icon" title="پشتیبانی شبانه‌روزی" description={d1} />
             <Description key={1} img="guarantee-benefit-icon" title="ضمانت بازگشت هزینه" description={d2} />
             <Description key={2} img="credit-benefit-icon" title="اعتبار سنجی میزبان و مسافر" description={d3} />
             <Description key={3} img="quality-benefit-icon" title=" کنترل کیفی توسط کومه گردی" description={d4} />
             <Description key={4} img="train-benefit-icon" title="آموزش و تایید میزبان" description={d5} />
             <Description key={5} img="certificate-benefit-icon" title="دریافت تمام مجوزهای لازم" description={d6} />
            </div>

        </>

    )
}
export default Descriptions;