import React from "react";

class Basic extends React.Component {
    state = { counter: 0 }


    // increment()
    // {
        
    // }

    render() {
        // console.log('Basic component')
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto text-center py-5">
                        <div className="card bg-light">
                            <div className="card-header">
                                <h5 id="display" className="fs-1">{ this.state.counter }</h5>
                            </div>
                            <div className="card-body d-flex justify-content-around">
                                <button type="button" 
                                        id="increment" 
                                        className="btn btn-secondary"
                                        onClick={ () => this.setState((state) => ({
                                            counter: state.counter + 1
                                        }))}
                                >Increment +</button>
                                <button type="button" 
                                        id="decrement" 
                                        className="btn btn-dark"
                                        onClick={() => this.state.counter > 0 ? this.setState((state) => ({
                                                    counter: state.counter - 1
                                                })) : '' }
                                >Decrement -</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basic;