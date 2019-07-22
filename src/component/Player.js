import React,{Component} from 'react'
import axios from "axios"
import {NavLink} from "react-router-dom";

class Player extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            player:[]
        }

    }

    //데이터 읽기
    componentWillMount() {

        var _this=this;
        axios.get("/player",{
            params:{
                tno:this.props.match.params.tno
            }
        }).then(function (result) {
            // response.json(docs);
            //[{}]
            _this.setState({player:result.data})
        })
    }
    // 화면에 출력하는 함수
    render()
    {
        const html=this.state.player.map((m)=>
            <NavLink to={"/player_detail/"+m.tno+"/"+m.pno} style={{"color":"black"}}>
                <div className="col-sm-3">
                    <div className="thumbnail" style={{"height":"240px"}}>
                        <img src={m.player_picture} width="150px" height="150px" />
                            <p style={{"font-size":"20px"}}>{m.player_number} / <strong>{m.player_name}</strong></p>
                            <p>{m.position}</p>
                    </div>
                </div>
            </NavLink>
        )
        return (

            <div className="container">
                <div className={"row"}>
                    <table className={"player_List"} style={{"margin-top":"800px"}}>
                        <h2 className={"text-left"}>Player List</h2>
                        {html}
                    </table>
                </div>
            </div>

        );
    }
}
export default Player;