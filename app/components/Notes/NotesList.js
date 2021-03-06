import React from 'react';

class NotesList extends React.Component{
  render(){
    var notes = this.props.notes.map((note, index) => {
      return <li key={index}> {note} </li>
    });
    return (
      <ul>
        {notes}
      </ul>
    )
  }
};

export default NotesList;