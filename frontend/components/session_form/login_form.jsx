import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
            let user = Object.assign({}, this.state);

        this.props.processForm(user)
            .then(() => this.props.closeModal());
    }

    handleDemoUser() {
        this.props.logindemo()
            .then(() => this.props.closeModal());
    }

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    }

    renderErrors() {
        return (
            <ul className="form-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="form-container">
                <div className="form-closing-x" onClick={() => this.props.closeModal()}>&#10005;</div>
                    <br/>
                    <br/>
                    <button className="form-demo-button"
                        type="submit"
                        onClick={this.handleDemoUser}>
                        Demo User
                        </button>
                    <div className="form-or-separator">
                        <hr/>
                    </div>
                <div className="form-title">Log In</div>
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="form">
                        <br/>
                        <input type="text"
                                className="form-input"
                                value={this.state.email}
                                placeholder={"Email address"}
                                onChange={this.update('email')}
                                // required
                            />
                        {this.renderErrors()}
                        <br/>
                        <input type="password"
                                className="form-input"
                                value={this.state.password}
                                placeholder={"Password"}
                                onChange={this.update('password')}
                                // required
                            />
                        <button className="form-button" type="submit" value={this.props.formType}>Log In</button>
                    </div>
                </form>
                <br/>
                <div className="form-change-container">
                    Don’t have an account?
                    <button className="form-change-btn" onClick={() => this.props.openModal('Sign Up')}>
                        Sign Up
                    </button>
                </div>
            </div>
        );
    }
}

export default LogInForm;
