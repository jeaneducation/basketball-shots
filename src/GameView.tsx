import React from 'react';
import {Grid} from "semantic-ui-react";
import {Game, Team} from "./App";
import TeamView from "./TeamView";

interface Props {
    game: Game
    setGame: (data: Partial<Game>) => void
    singleTeamOnly: boolean
}

export class GameView extends React.Component<Props> {

    setTeam = (data: Partial<Team>, index: number) => {
        const teams = this.props.game.teams;
        teams[index] = {...this.props.game.teams[index], ...data};
        this.props.setGame({teams});
    }

    render() {
        // const getDate = (): string => {
        //     const date = this.props.game.create_datetime;
        //     return `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        // }
        //
        // const getMatchText = (): string => {
        //     const game = this.props.game;
        //     return `${!!game.teams[0].name ? game.teams[0].name : "[team name]"} v ${!!game.teams[1].name ? game.teams[1].name : "[team name]"}`;
        // }

        if (this.props.singleTeamOnly) {
            return <TeamView team={this.props.game.teams[0]} index={0} setTeam={this.setTeam} quadrantView={this.props.singleTeamOnly && window.innerWidth > 500}/>
        }
        return (
            <React.Fragment>
                {/*<Header as="h1">{getMatchText()}</Header>*/}
                {/*<Header as="h2">{getDate()}</Header>*/}

                {/*todo: remove hacked widths*/}
                <Grid style={{width: "100%"}}>
                    {/*<Grid.Column style={{width: `30vw`}}>*/}
                        <Grid.Column width={8}>
                        <TeamView team={this.props.game.teams[0]} index={0} setTeam={this.setTeam}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <TeamView team={this.props.game.teams[1]} index={1} setTeam={this.setTeam}/>
                    </Grid.Column>
                </Grid>

            </React.Fragment>
        );
    }
}

export default GameView;
