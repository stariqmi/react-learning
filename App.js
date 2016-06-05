import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <div>{this.props.txt}</div>;
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    // name: React.PropTypes.number.isRequired
};

ReactDOM.render(
    <App txt="this is the props text" />,
    document.getElementById('app')
);

