function ListGroup(){

  let items =[
    "New York",
    "San Francisco",
    "Tokyo",
    "London",

  ]
  items = [];
 
  const getMessage = () => {return  items.length === 0 ? <p>No item found..</p> : null}


    return (
    <> 
    <h1>List....</h1>
    {getMessage()}
    
    <ul className="list-group">
   
  {items.map((item) => 
  (<li className="list-group-item" key={item} onClick={() => console.log("Clicked")}>{item}</li>

  ))}
  </ul>
  </>
    );
    
}

export default ListGroup;