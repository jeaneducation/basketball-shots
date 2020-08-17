import React from 'react';
import {Button, Card, Input, Label} from "semantic-ui-react";
import {Quarter} from "./App";

interface Props {
    index: number
    quarter: Quarter
    setQuarter: (data: Partial<Quarter>, quarterIndex: number) => void
    calcRunningTotal: (shots: number, contests: number) => number
}

export class QuarterView extends React.Component<Props> {

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
                    <Card.Description style={{display: "grid"}}>
                        <div style={{display: "inline-flex"}}>
                            <div>
                                <Label size="big" htmlFor="shots">
                                    Shots
                                </Label>
                                <Input id="shots" value={this.props.quarter.shots} readOnly type="number" style={{width: "5rem"}}/>
                            </div>
                            <div>
                                <Button.Group>
                                    <Button icon="chevron down" color="yellow" onClick={() => this.adjustShots(-1)}
                                            disabled={this.props.quarter.shots <= 0}/>
                                    <Button icon="chevron up" color="green" onClick={() => this.adjustShots(1)}/>
                                </Button.Group>
                            </div>
                        </div>
                        <div style={{display: "inline-flex"}}>
                            <div>
                                <Label size="big" htmlFor="contests">
                                    Contests
                                </Label>
                                <Input id="contests" value={this.props.quarter.contests} readOnly type="number" style={{width: "5rem"}}/>
                            </div>
                            <div>
                                <Button.Group>
                                    <Button icon="chevron down" color="yellow" onClick={() => this.adjustContests(-1)}
                                            disabled={this.props.quarter.contests <= 0}/>
                                    <Button icon="chevron up" color="green" onClick={() => this.adjustContests(1)} disabled={this.props.quarter.shots <= this.props.quarter.contests}/>
                                </Button.Group>
                            </div>
                        </div>
                        <div style={{display: "inline-flex"}}>
                            <Input label="Running Total %" value={this.props.calcRunningTotal(this.props.quarter.shots, this.props.quarter.contests)} readOnly style={{width: "5rem"}}/>
                        </div>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default QuarterView;
