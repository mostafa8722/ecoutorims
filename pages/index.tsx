import React ,{Component} from "react"
import Banner from "../components/Home/Banner";
import MiddleBanners from "../components/Home/MiddleBanners";
import Categories from "../components/Home/Categories";
import Descriptions from "../components/Home/Descriptions";
import {connect} from "react-redux";
import {test} from "../logic/actions";
class  HomePage extends Component{



    componentWillMount() {

        console.log("ttt",this.props.dispatch)
        this.props.dispatch(test("09118448204000"))
    }

    render() {
        return (
            <>
                <Banner />

            </>
        );
    }
}

const mapStateToProps = (state) =>{

    console.log("tett",state.test);
    return {

       // filters: state.constant[state.constant.length-1]

    }
}


export default connect(mapStateToProps)(HomePage);
