import React,{Component} from 'react'
import axios from "axios";
import NavLink from "react-router-dom/es/NavLink";

class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            team:[]
        }

    }


    //데이터 읽기
    componentWillMount() {
        var _this=this;
        axios.get('/team').then(function(result){
            _this.setState({team:result.data});
        })
    }
    // 화면에 출력하는 함수
    render()
    {
        const html=this.state.team.map((m)=>
            <NavLink to={"/detail/"+m.tno}>
                <div className={"text-center team"}>
                    <div className="circle">
                        <img src={m.emblem}/>
                        <h6>{m.team_name}</h6>
                    </div>
                </div>
            </NavLink>
        )
        return (
            <div className="container">
                {html}
            </div>

        );
    }
}
export default Home;