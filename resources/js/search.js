function Search(props) {


 const search = ({target}) => {
   props.onChange(target.value);
 }

 return (
   <input type="text" onChange={search} value={props.value} />
 );
}

export default Search;
