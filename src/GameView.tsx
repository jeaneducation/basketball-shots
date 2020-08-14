import React from 'react';
import {Grid, Header} from "semantic-ui-react";
import {Game} from "./App";
import TeamView from "./TeamView";

interface Props {
    game: Game
}

interface State {

}

export class GameView extends React.Component<Props, State> {
    render() {
        const getDate = (): string => {
            const date = this.props.game.create_datetime;
            return `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        }

        const getMatchText = (): string => {
            const game = this.props.game;
            return `${!!game.teams[0].name ? game.teams[0].name : "[empty]"} v ${!!game.teams[1].name ? game.teams[1].name : "[empty]"}`;;
        }

        return (
            <React.Fragment>
                {/*<Header as="h1">{getMatchText()}</Header>*/}
                {/*<Header as="h2">{getDate()}</Header>*/}

                <Grid style={{width: "100%"}}>
                    <Grid.Column width={8}>
                        <TeamView team={this.props.game.teams[0]}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <TeamView team={this.props.game.teams[1]}/>
                    </Grid.Column>
                </Grid>

            </React.Fragment>
        );
    }
}

export default GameView;
