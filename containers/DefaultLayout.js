

import Header from '../components/Defualt/Header';
import Footer from '../components/Defualt/Footer';
import {connect} from "react-redux";

const DefaultLayout = (props)=>{

    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
}
const  mapDispatchToProps = (dispatch)=>{
    return {

    }
}
export default connect(null,mapDispatchToProps)(DefaultLayout);

