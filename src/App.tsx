import React from 'react';
import './App.scss';
import {Button, Dropdown, DropdownItemProps, Grid, Icon} from "semantic-ui-react";
import GameView from "./GameView";
import {DropdownProps} from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";

interface State {
    games: Game[]
    current_game_index?: number
}

interface Props {

}

export interface Game {
    teams: [Team, Team]
    create_datetime: Date
}

export interface Team {
    name?: string
    quarters: [Quarter, Quarter, Quarter, Quarter]
}

export interface Quarter {
    shots: number
    contests: number
}

export class App extends React.Component<Props, State> {

    createNewGame = () => {
        const newGames = this.state.games;
        newGames.unshift({
            create_datetime: new Date(),
            teams: [
                {
                    name: "",
                    quarters: [
                        {
                            shots: 0,
                            contests: 0,
                        },
                        {
                            shots: 0,
                            contests: 0,
                        },
                        {
                            shots: 0,
                            contests: 0,
                        },
                        {
                            shots: 0,
                            contests: 0,
                        },
                    ]
                },
                {
                    name: "",
                    quarters: [
                        {
                            shots: 0,
                            contests: 0,
                        },
                        {
                            shots: 0,
                            contests: 0,
                        },
                        {
                            shots: 0,
                            contests: 0,
                        },
                        {
                            shots: 0,
                            contests: 0,
                        },
                    ]
                },
            ]
        });

        this.setState({
            games: newGames,
            current_game_index: 0,
        });
    }

    constructor(props: Props) {
        super(props)
        this.state = {
            games: [
                {
                    create_datetime: new Date(),
                    teams: [
                        {
                            name: "Janguars",
                            quarters: [
                                {
                                    shots: 0,
                                    contests: 0,
                                },
                                {
                                    shots: 0,
                                    contests: 0,
                                },
                                {
                                    shots: 0,
                                    contests: 0,
                                },
                                {
                                    shots: 0,
                                    contests: 0,
                                },
                            ]
                        },
                        {
                            name: "Hellcats",
                            quarters: [
                                {
                                    shots: 0,
                                    contests: 0,
                                },
                                {
                                    shots: 0,
                                    contests: 0,
                                },
                                {
                                    shots: 0,
                                    contests: 0,
                                },
                                {
                                    shots: 0,
                                    contests: 0,
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    }

    render() {
        const getDate = (date: Date): string => {
            return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        }

        const getMatchText = (game: Game): string => {
            return `${!!game.teams[0].name ? game.teams[0].name : "[empty]"} v ${!!game.teams[1].name ? game.teams[1].name : "[empty]"} - ${getDate(game.create_datetime)}`;
        }

        const dropdownOptions: DropdownItemProps[] =
            this.state.games.map((game, index) => {
                    return {
                        key: index,
                        text: getMatchText(game),
                        value: index,
                    }
                }
            );

        const handleDropdownChange = (e: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
            this.setState({current_game_index: data.value !== "" ? Number(data.value) : undefined})
        }

        return (
            <React.Fragment>
                <Grid>
                    <Grid.Row>
                        <div style={{display: "inline-flex"}}>
                            <Dropdown
                                placeholder="Select game..."
                                fluid
                                selection
                                options={dropdownOptions}
                                onChange={handleDropdownChange}
                                value={this.state.current_game_index}
                            />
                            <Button icon labelPosition="left" onClick={this.createNewGame}>
                                <Icon name="plus"/>
                                New Game
                            </Button>
                        </div>
                    </Grid.Row>
                    {this.state.current_game_index !== undefined &&
                    <Grid.Row>
                        <GameView game={this.state.games[this.state.current_game_index]}/>
                    </Grid.Row>
                    }
                </Grid>
            </React.Fragment>
        );
    }
}

export default App;
