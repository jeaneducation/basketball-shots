import React from 'react';
import {Grid, Input} from "semantic-ui-react";
import {Quarter, Team} from "./App";
import QuarterView from "./QuarterView";
import TotalView from "./TotalView";
import {InputOnChangeData} from "semantic-ui-react";

interface Props {
    index: number
    team: Team
    setTeam: (data: Partial<Team>, index: number) => void
}

export class TeamView extends React.Component<Props> {
    onTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        this.props.setTeam({name: data.value !== "" ? data.value : undefined}, this.props.index);
    }

    setQuarter = (data: Partial<Quarter>, index: number) => {
        const quarters = this.props.team.quarters;
        quarters[index] = {...this.props.team.quarters[index], ...data};
        this.props.setTeam({quarters}, this.props.index);
    }

    calcTotalShots = (): number => {
        let total = 0;
        this.props.team.quarters.forEach((quarter) => {
            total += quarter.shots;
        });
        return total;
    }

    calcTotalContests = (): number => {
        let total = 0;
        this.props.team.quarters.forEach((quarter) => {
            total += quarter.contests;
        });
        return total;
    }

    render() {
        return (
            <Grid style={{width: "100%"}}>
                <Grid.Row>
                    <Input label="Team" placeholder="team name" value={this.props.team.name}
                           onChange={this.onTeamNameChange}/>
                </Grid.Row>
                <Grid.Row>
                    {this.props.team.quarters.map((quarter, index) => <QuarterView quarter={quarter}
                                                                                   index={index}
                                                                                   setQuarter={this.setQuarter}/>)}
                    <TotalView shots={this.calcTotalShots()} contests={this.calcTotalContests()}/>
                </Grid.Row>
            </Grid>
        );
    }
}

export default TeamView;
