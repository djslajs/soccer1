import React,{Component} from 'react'
import axios from "axios"
import NavLink from "react-router-dom/es/NavLink";

class TeamDetail extends Component{
    constructor(props)
    {
        super(props);
        //변수 선언
        this.state={
            list:{},
            tno:1
        };

    }

    componentWillMount() {
        //서버에서 데이터 읽는 부분
        var _this=this;
        axios.get("/team_detail",{
            params:{
                tno:this.props.match.params.tno
            }
        }).then(function (result) {
            // response.json(docs);
            //[{}]
            _this.setState({list:result.data[0]})
        })
        console.log("componentWillMount")
        console.log("tno")
    }
    render() {
        //화면에 출력 부분
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"team_detail"} style={{"margin-top":"800px"}}>
                        <div className={"col-sm-6"}>
                            <table className={"table"}>
                                <tbody style={{"font-size":"20px"}}>
                                <tr>
                                    <td className={"text-center"} width={"30%"} rowSpan={"5"}>
                                        <img src={this.state.list.emblem} width={"100%"} />
                                    </td>
                                    <th className={"text-center"} colSpan={"2"} style={{"font-size":"50px"}}>{this.state.list.team_name}</th>
                                </tr>
                                <tr>
                                    <th className={"text-right"} width={"20%"}>스타디움</th>
                                    <td className={"text-left"} width={"50%"}>{this.state.list.stadium}</td>
                                </tr>
                                <tr>
                                    <th className={"text-right"} width={"20%"}>공식 홈페이지</th>
                                    <td className={"text-left"} width={"50%"}>
                                        <a href={this.state.list.homePageLink}>{this.state.list.homePageLink}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={"3"} className={"text-right"}>
                                        <NavLink to={"/player/"+this.state.list.tno}><td style={{"color":"blue"}}><strong>선수단 정보</strong></td></NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={"3"} className={"text-right"}>
                                        <NavLink to={"/"} class={"btn btn-sm btn-danger"}>목록</NavLink>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={"col-sm-6"}>
                            <table className={"table"} width={"100%"} style={{"border":"solid #6c92a1","font-size":"20px"}}>
                                <thead>
                                    <tr>
                                        <th className={"text-center"}>Matches played</th>
                                        <th className={"text-center"}>Wins</th>
                                        <th className={"text-center"}>Losses</th>
                                        <th className={"text-center"}>Goals</th>
                                        <th className={"text-center"}>Goals conceded</th>
                                        <th className={"text-center"}>Clean sheets</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.list.matches_play}</td>
                                        <td>{this.state.list.wins}</td>
                                        <td>{this.state.list.losses}</td>
                                        <td>{this.state.list.goals}</td>
                                        <td>{this.state.list.goals_conceded}</td>
                                        <td>{this.state.list.clean_sheets}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br/>
                            <div className={"col-sm-6"}>
                                <div className="thumbnail">
                                    <img src={this.state.list.home_kit} width="200" height="150"/>
                                    <p><strong>Home Kit</strong></p>
                                </div>
                            </div>
                            <div className={"col-sm-6"}>
                                <div className="thumbnail">
                                    <img src={this.state.list.away_kit} width="200" height="150"/>
                                    <p><strong>Away Kit</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TeamDetail;