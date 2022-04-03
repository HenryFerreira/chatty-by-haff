import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGitHub, signInWithGoogle } from "../helpers/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <>
        <div>
          <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            id="form-login"
          >
            <h1>
              Login to
              <Link to="/">
                Chatty by Haff
              </Link>
            </h1>
            <p>
              Complete el siguiente formulario para iniciar sesión en su cuenta.
            </p>
            <div>
              <input
                placeholder="Correo electronico"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Contraseña"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
              />
            </div>
            <div>
              {this.state.error ? (
                <p>{this.state.error}</p>
              ) : null}
              <br />
              <button type="submit" class="btn btn-success" >Login</button>
            </div>
            <hr />
            <p>
              ¿No tienes una cuenta? <Link to="/signup">Sign up</Link>
            </p>
            <button id="sign-in-with-google" onClick={this.googleSignIn} type="button" class="btn btn-secondary m-2">
              Iniciar sesión con Google
            </button>
            <button id="sign-in-with-github" type="button" onClick={this.githubSignIn} class="btn btn-secondary m-2">
              Iniciar sesión con GitHub
            </button>
          </form>
        </div>
      </>
    );
  }
}