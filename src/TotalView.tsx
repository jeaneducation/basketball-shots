import React from 'react';
import {Card, Grid, Input} from "semantic-ui-react";

interface Props {
    shots: number
    contests: number
    calcRunningTotal: (shots: number, contests: number) => number
}

export class TotalView extends React.Component<Props> {

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
                                <Input label="Shots" value={this.props.shots} readOnly/>
                            </Grid.Row>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Contests" value={this.props.contests} readOnly/>
                            </Grid.Row>
                            <Grid.Row style={{display: "inline"}}>
                                <Input label="Running Total %" value={this.props.calcRunningTotal(this.props.shots, this.props.contests)} readOnly/>
                            </Grid.Row>
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default TotalView;
