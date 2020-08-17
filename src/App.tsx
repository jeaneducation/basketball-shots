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
    single_team_only: boolean
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

    constructor(props: Props) {
        super(props)
        this.state = {
            games: [],
            current_game_index: undefined,
        };
    }

    componentDidMount() {
        const storedGamesString = localStorage.getItem('games');
        try {
            console.log("LOAD SAVED DATA", storedGamesString);
            if (storedGamesString) {
                const storedGames: Game[] = JSON.parse(storedGamesString);
                // set Date objects, which are serialised as strings
                storedGames.forEach((game, index) => {
                    game.create_datetime = new Date(game.create_datetime);
                })
                console.log("STORED GAMES JSON", storedGames);
                // assume parsed json is the right type
                this.setState({games: storedGames});
            }
        } catch (e) {
            localStorage.setItem('games', '');
        }
    }

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
            ],
            single_team_only: true,
        });

        this.setState({
            games: newGames,
            current_game_index: 0,
        }, () => this.saveData());
    }

    saveData = () => {
        const storedGamesString = JSON.stringify(this.state.games);
        localStorage.setItem('games', storedGamesString);
    }

    deleteCurrentGame = () => {
        if (this.state.current_game_index !== undefined) {
            if (window.confirm("Are you sure you wan to delete the current game?")) {
                const games = this.state.games;
                games.splice(this.state.current_game_index, 1);
                console.log('games delete', games);
                this.setState({
                    games,
                    current_game_index: undefined,
                }, () => this.saveData());
            }
        }
    }

    setGame = (data: Partial<Game>) => {
        const index = this.state.current_game_index;
        if (index !== undefined) {
            const games = this.state.games;
            games[index] = {...this.state.games[index], ...data};
            this.setState({games}, () => this.saveData());
        }
    }

    render() {
        const getDate = (date: Date): string => {
            return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        }

        const getMatchText = (game: Game): string => {
            if (game.single_team_only) {
                return `${!!game.teams[0].name ? game.teams[0].name : "[team name]"} - ${getDate(game.create_datetime)}`;
            }
            return `${!!game.teams[0].name ? game.teams[0].name : "[team name]"} v ${!!game.teams[1].name ? game.teams[1].name : "[team name]"} - ${getDate(game.create_datetime)}`;
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

        const setSingleTeamOnly = (singleTeamOnly: boolean) => {
            if (this.state.current_game_index !== undefined) {
                const games = this.state.games;
                if (games[this.state.current_game_index].single_team_only !== singleTeamOnly) {
                    games[this.state.current_game_index].single_team_only = singleTeamOnly;
                    this.setState({games}, () => this.saveData());
                }
            }
        }

        return (
            <React.Fragment>
                {/*todo: remove hacked width*/}
                <Grid style={{width: "100%"}}>
                    <Grid.Row>
                        <div style={{display: "inline-flex"}}>
                            <Dropdown
                                placeholder="Select game..."
                                selection
                                fluid
                                options={dropdownOptions}
                                onChange={handleDropdownChange}
                                value={this.state.current_game_index !== undefined ? this.state.current_game_index : ""}
                                disabled={this.state.games.length < 1}
                            />
                            <Button icon labelPosition="left" onClick={this.createNewGame} primary={true}>
                                <Icon name="plus"/>
                                New Game
                            </Button>
                            <div>
                                <Button onClick={() => setSingleTeamOnly(true)} primary={this.state.current_game_index !== undefined && this.state.games[this.state.current_game_index].single_team_only} disabled={this.state.current_game_index === undefined}>Single</Button>
                                <Button onClick={() => setSingleTeamOnly(false)} primary={this.state.current_game_index !== undefined && !this.state.games[this.state.current_game_index].single_team_only} disabled={this.state.current_game_index === undefined}>Double</Button>
                            </div>
                            <Button icon onClick={this.deleteCurrentGame} disabled={this.state.current_game_index === undefined}>
                                <Icon name="trash"/>
                            </Button>
                        </div>
                    </Grid.Row>
                    {this.state.current_game_index !== undefined &&
                    <Grid.Row>
                        <GameView game={this.state.games[this.state.current_game_index]} setGame={this.setGame} singleTeamOnly={this.state.games[this.state.current_game_index].single_team_only}/>
                    </Grid.Row>
                    }
                </Grid>
            </React.Fragment>
        );
    }
}

export default App;
