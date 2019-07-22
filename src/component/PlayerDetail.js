import React,{Component} from 'react'
import axios from "axios"
import {NavLink} from "react-router-dom";

class PlayerDetail extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            player:{},
            pno:1,
            tno:1
        }

    }

    //데이터 읽기
    componentWillMount() {
        var _this=this;
        axios.get("/player_detail",{
            params:{
                tno:this.props.match.params.tno,
                pno:this.props.match.params.pno
            }
        }).then(function (result) {
            // response.json(docs);
            //[{}]
            _this.setState({player:result.data[0]})
        })
    }
    // 화면에 출력하는 함수
    render()
    {
        const p = this.state.player.position;
        let pp=null;
        if(p=="Goalkeeper")
        {
            pp=<th className={"text-center"}>Clean sheets </th>;
        }
        else
        {
            pp=<th className={"text-center"}>Goals</th>;
        }

        return (

            <div className="container">
                <div className={"row"}>
                    <div className={"player_detail"} style={{"margin-top":"800px"}}>
                        <div className={"col-sm-5"}>
                            <div className="thumbnail" style={{"height":"450px"}}>
                                <img src={this.state.player.player_picture} width="350px" height="350px" />
                                <p style={{"font-size":"20px"}}>{this.state.player.player_number} / <strong>{this.state.player.player_name}</strong></p>
                                <p>{this.state.player.position}</p>
                            </div>
                        </div>
                        <div className={"col-sm-7"}>
                            <div className="panel-group" style={{"font-size":"20px"}}>
                                <div className="panel panel-default">
                                    <div className="panel-heading">국적</div>
                                    <div className="panel-body">{this.state.player.nation}</div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">생년월일</div>
                                    <div className="panel-body">{this.state.player.birth}</div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">키/몸무게</div>
                                    <div className="panel-body">{this.state.player.height} / {this.state.player.weight}</div>
                                </div>
                            </div>

                            <table className={"table"} width={"100%"} style={{"border":"solid #6c92a1","font-size":"20px"}}>
                                <thead>
                                    <tr>
                                        <th className={"text-center"}>Appearances</th>
                                        {pp}
                                        <th className={"text-center"}>Wins</th>
                                        <th className={"text-center"}>Losses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.player.appearances}</td>
                                        <td>{this.state.player.goals}</td>
                                        <td>{this.state.player.wins}</td>
                                        <td>{this.state.player.losses}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}
export default PlayerDetail;