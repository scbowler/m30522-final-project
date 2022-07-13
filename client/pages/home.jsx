import React from 'react';
import Card from '../components/card';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    fetch('/api/entries')
      .then(resp => resp.json())
      .then(entries => {
        this.setState({ entries });
      });
  }

  render() {
    const { entries } = this.state;

    return (
      <div className='py-3'>
        <h1 className='text-center mb-5'>Journal Entries</h1>
        <div className='row'>
          {
            entries.map(entry => 
              <Card key={entry.entryId} entry={entry} />
            )
          }
        </div>
      </div>
    );
  }
}
