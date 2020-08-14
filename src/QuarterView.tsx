import React from 'react';
import {Button, Card, Grid, Input} from "semantic-ui-react";
import {Quarter} from "./App";

interface Props {
    index: number
    quarter: Quarter
    setQuarter: (data: Partial<Quarter>, quarterIndex: number) => void
}

export class QuarterView extends React.Component<Props> {
    calcRunningTotal = (): number => {
        const shots = this.props.quarter.shots;
        const contests = this.props.quarter.contests;
        // please don't divide by 0
        // return (shots - (contests / (shots > 0 ? shots : 1)) * 100);
        return (shots - contests) / (shots > 0 ? shots : 1) * 100;
    }

    adjustShots = (value: number) => {
        const newShots = this.props.quarter.shots + value;
        if ((newShots) >= 0) {
            this.props.setQuarter(
                {
                    shots: newShots,
                },
                this.props.index,
            );
        }
    }

    adjustContests = (value: number) => {
        const newContests = this.props.quarter.contests + value;
        if ((newContests) >= 0) {
            this.props.setQuarter(
                {
                    contests: newContests,
                },
                this.props.index,
            );
        }
    }

    render() {
        return (
            <Card style={{width: "100%"}}>
                <Card.Content>
                    <Card.Header>
                        Quarter {this.props.index + 1}
                    </Card.Header>
                    <Card.Description>
                        <Grid>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Shots" value={this.props.quarter.shots} readOnly/>
                                <Button icon="chevron down" onClick={() => this.adjustShots(-1)}/>
                                <Button icon="chevron up" onClick={() => this.adjustShots(1)}/>
                            </Grid.Row>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Contests" value={this.props.quarter.contests} readOnly/>
                                <Button icon="chevron down" onClick={() => this.adjustContests(-1)}/>
                                <Button icon="chevron up" onClick={() => this.adjustContests(1)}/>
                            </Grid.Row>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Running Total" value={this.calcRunningTotal()} readOnly/>
                            </Grid.Row>
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default QuarterView;
