import * as React from 'react';
const list = [
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


const App = () => {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />

      <hr />

      <List />
    </div>
  );
}

const List = () => {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={item.objectID}>
            {/* only use an index as last resort */}
            {/* and by the way: that's how you do comments in JSX */}
            {item.title}
          </li>
        )
      })}
    </ul>
  )
}

const Search = () => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id='search' type="text" />
    </div>
  )
}

export default App; 