import React from 'react';
import {Button, Card, Grid, Icon, Input, Table} from "semantic-ui-react";
import {Quarter} from "./App";

interface Props {
    shots: number
    contests: number
}

export class TotalView extends React.Component<Props> {
    calcRunningTotal = (): number => {
        const shots = this.props.shots;
        const contests = this.props.contests;
        // please don't divide by 0
        return (shots - (contests / (shots > 0 ? shots : 1) * 100));
    }

    render() {
        return (
            <Card style={{width: "100%"}}>
                <Card.Content>
                    <Card.Header>
                        Totals
                    </Card.Header>
                    <Card.Description>
                        <Grid>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Shots" value={this.props.shots} readonly/>
                            </Grid.Row>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Contests" value={this.props.contests} readonly/>
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

export default TotalView;
