import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFiltersStart } from '../../redux/actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchData()
  }

  componentDidUpdate(nextProp) {
    if (this.props.filters !== nextProp.filters) {
      return true;
    }
    return false;
  }
  render() {
    console.log(this.props.filters)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.props.filters.map((item, index) => <div>{item}</div>)}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.data.filters || []
})

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => {
      dispatch(fetchFiltersStart())
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);
