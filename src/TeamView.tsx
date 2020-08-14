import React from 'react';
import {Card, Grid, Input} from "semantic-ui-react";
import {Team} from "./App";
import QuarterView from "./QuarterView";
import TotalView from "./TotalView";

interface Props {
    team: Team
}

interface State {

}

export class TeamView extends React.Component<Props, State> {
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
                    <Input label="Team" placeholder="team name" value={this.props.team.name}/>
                </Grid.Row>
                <Grid.Row>
                    {this.props.team.quarters.map((quarter, index) => <QuarterView quarter={quarter}
                                                                                   quarter_number={index + 1}/>)}
                    <TotalView shots={this.calcTotalShots()} contests={this.calcTotalContests()}/>
                </Grid.Row>
            </Grid>
        );
    }
}

export default TeamView;
