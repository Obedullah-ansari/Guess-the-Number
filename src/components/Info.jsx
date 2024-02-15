

export default function Info({ userinput , wininfo}) {
  const totalChances = 10 - userinput.length;
  if(totalChances===-1){
    return(  <h3 className="foot">opps! you out of move</h3> )
  }
  if(wininfo){
    return(
       <h3 className="foot">Congratulations</h3> 
    )
  }

  return (
    <div>
      <ul>
        {userinput.map((array, index) => (
          <span id="info" key={index}> {array} </span>
        ))}
       { <h3 className="foot">You have  {totalChances}  moves</h3>  }
      </ul>
    </div>
  );
}