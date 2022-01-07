import Link from 'next/link'

const Footer =()=>{
    return (
        <>
            <footer className="footer-section">
                <div className="d-flex">
                    <div className="col-md-3">
                        <h2>کومه گرد</h2>
                    </div>

                    <div className="col-md-3 footer-link d-flex flex-column">
                        <Link className="mt-10"  href="/">
                            <a>سوالات متداول  </a>
                        </Link>
                        <Link className="mt-10"  href="/">
                            <a>قوانین و مقررات رزرو </a>
                        </Link>
                        <Link className="mt-10"  href="/">
                            <a>قوانین و مقررات میزبان </a>
                        </Link>
                        <Link className="mt-10"  href="/">
                            <a>تماس با ما </a>
                        </Link>


                    </div>

                    <div className="col-md-3 footer-link d-flex flex-column">
                        <Link className="mt-10"  href="/">
                            <a>وبلاگ  </a>
                        </Link>
                        <Link className="mt-10"  href="/">
                            <a>قوانین </a>
                        </Link>
                        <Link className="mt-10"  href="/">
                            <a>درباره ی ما </a>
                        </Link>
                        <Link className="mt-10"  href="/">
                            <a>تماس با ما </a>
                        </Link>


                    </div>

                    <div className="col-md-3">
                        <h2>کومه گرد</h2>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;