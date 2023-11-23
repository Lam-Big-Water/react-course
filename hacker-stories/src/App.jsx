import * as React from 'react';

const useStorageState = (initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem('value') || initialState
  );

  React.useEffect(() => {
    localStorage.setItem('value', value);
  }, [value]);

  return [value, setValue];
  
}
// * pass in a flexible key
// const useStorageState = (key, initialState) => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(key) || initialState
//   );

//   React.useEffect(() => {
//     localStorage.setItem(key, value);
//   }, [value, key]);

//   return [value, setValue];
  
// }

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

  const [searchTerm, setSearchTerm] = useStorageState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />

      {/* B */}
      <Search search={searchTerm} onSearch = {handleSearch} />

      <hr />

      <hr />

      <List list={searchedStories}/>
    </div>
  );
}

const InputWithLabel = ({id, type = 'text', label, value, onInputChange}) => (
  <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input
    id={id} 
    type={type}
    value={value}
    onChange={onInputChange}
    />
  </>
);


const Search = ({search, onSearch}) => {

  return (
      <>
        <label htmlFor="search">Search: </label>
        
        <input id='search' type="text" value={search} onChange={onSearch}/>
      </>
      // or use <React.Fragment> </React.Fragment>
  );
};

const List = ({list}) => (
    <ul>
      {list.map(({objectID, ...item}) => (
        <Item key={objectID} {...item}/>
      ))}
    </ul>
);

const Item = ({title, url, author, num_comments, points}) => {

    return (
      <li>
        <span>
          <a href={url}>{title}</a>
        </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
      </li>
    );
};



export default App; 