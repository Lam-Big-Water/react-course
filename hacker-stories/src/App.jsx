import * as React from 'react';



const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Wal',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />

      <hr />
      {/* Receive data */}
      <List list={stories}/>
    </div>
  );
}

const List = (props) => (
    <ul>
      {/* Distribute data */}
      {props.list.map((item) => (
        <Item key={item.objectID} item={item}/>
      ))}
    {console.log(`List_render`)}
    </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
    {console.log(`Item_render`)}
  </li>
);

const Search = () => {

const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = (event) => {
    // * whenever this stateful value changes the affected components will re-render to use it
    setSearchTerm(event.target.value);

    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      {/* 
        if handleChange is a function
        which does not return a function
        don't do this
        <input onChange={handleChange()} />

        do this instead
        <input onChange={handleChange} />
      */}
      <input id='search' type="text" onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>.
        {console.log(`search_render`)}

      </p>
    </div>
  )
}

export default App; 