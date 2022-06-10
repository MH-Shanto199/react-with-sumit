import React from "react";
import Button from "./Button";

class Clock extends React.Component {
    // constructor(props)
    // { keno na amra props use kortesi na tai eivabe constractor use kora lagtese nah
    //     super(props);
    // }
    state = {
        date: new Date(),
        locale: 'en-US'
    };

    componentDidMount()
    {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() 
    {
        clearInterval(this.clockTimer)
    }

    tick()
    {
        this.setState({
            date: new Date()
        });
    }

    changeLocale = () =>
    {
        if (this.state.locale === "bn-BD") {
            this.setState({
                locale: "en-US"
            });
        } else {
            this.setState({
                locale: "bn-BD"
            });
        }
    }

    render()
    {
        // console.log('Clock component')
        return (
            <div>
                <h1>
                    <span>{ this.state.date.toLocaleTimeString(this.state.locale) }</span>
                </h1>
                <Button callFunc={this.changeLocale} locale={ this.state.locale }/>
            </div>
        );
    }
}

export default Clock;