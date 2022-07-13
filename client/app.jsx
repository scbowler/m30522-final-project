import React from 'react';
import { parseRoute } from './lib';
import AddEntry from './pages/add-entry';
import Home from './pages/home';
import Nav from './components/nav';
import NotFound from './pages/not-found';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: parseRoute(location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = parseRoute(location.hash);
      this.setState({ route });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'add-entry') {
      return <AddEntry />;
    }
    return <NotFound />;
  }

  render() {
    console.log('App State:', this.state);

    return (
      <div className='container'>
        <Nav />
        {this.renderPage()}
      </div>
    );
  }
}
