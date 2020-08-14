import React from 'react';
import {Button, Card, Grid, Icon, Input, Table} from "semantic-ui-react";
import {Quarter} from "./App";

interface Props {
    quarter_number: number
    quarter: Quarter
}

export class QuarterView extends React.Component<Props> {
    calcRunningTotal = (): number => {
        const shots = this.props.quarter.shots;
        const contests = this.props.quarter.contests;
        // please don't divide by 0
        return (shots - (contests / (shots > 0 ? shots : 1) * 100));
    }

    render() {
        return (
            <Card style={{width: "100%"}}>
                <Card.Content>
                    <Card.Header>
                        Quarter {this.props.quarter_number}
                    </Card.Header>
                    <Card.Description>
                        <Grid>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Shots" value={this.props.quarter.shots} readonly/>
                                <Button icon="chevron down"/>
                                <Button icon="chevron up"/>
                            </Grid.Row>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Contests" value={this.props.quarter.contests} readonly/>
                                <Button icon="chevron down"/>
                                <Button icon="chevron up"/>
                            </Grid.Row>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Running Total" value={this.calcRunningTotal()} readonly/>
                            </Grid.Row>
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default QuarterView;
