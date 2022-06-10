import React from "react";

class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
    }


    handlaeChange = (e) => {
        // if (e.target.name === 'firstName') {
        //     this.setState({
        //         firstName: e.target.value
        //     })
        // } else if (e.target.name === 'lastName') {
        //     this.setState({
        //         lastName: e.target.value
        //     })
        // } else if (e.target.name === 'email') {
        //     this.setState({
        //         email: e.target.value
        //     })
        // }

        
        // shortcut ES6 computed property
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    atSubmit = (e) => {
        const { firstName, lastName, email } = this.state;
        e.preventDefault()
        console.log(firstName);
        console.log(lastName);
        console.log(email);
    }

    render() {
        const { firstName, lastName, email } = this.state;
        return (
            <section>
                <div className="container mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form action="#">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" name="firstName" className="form-control" value={ firstName } onChange={ this.handlaeChange }/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" name="lastName" className="form-control" value={ lastName } onChange={ this.handlaeChange }/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email address</label>
                                            <input type="email" name="email" className="form-control" value={ email } onChange={ this.handlaeChange }/>
                                        </div>
                                        <button type="submit" onClick={ this.atSubmit } className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
} 
export default Form;