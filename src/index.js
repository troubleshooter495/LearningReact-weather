import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage)
      return <SeasonDisplay lat={this.state.lat} />;

    return <Spinner text="Please accept location request" />;
  }

  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
