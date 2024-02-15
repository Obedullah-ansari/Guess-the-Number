export default function Win({ array, targetnumber, onClick }) {
  if (array.length >10 && array[array.length - 1] !== targetnumber) {
    return (
      <div>
        <h1 id="head">You lost!</h1>
        <button className="btn" onClick={onClick}>restart</button>
      </div>
    );
  } else if (array[array.length - 1] < targetnumber) 
    return <h1> Your number is less then the wining number</h1>;
   else if (array[array.length - 1] > targetnumber) 
    return <h1> Your number is higher then the wining number</h1>;
   else if (array[array.length - 1] == targetnumber){
    return (    
      <div>
        <h1 id="head">You won!</h1>
        <button className="btn" onClick={onClick} >restart</button>
      </div>
      );
    }
  
  return (
    <>
      <h3>You have ten chances to guess the right number</h3>
    </>
  );
}
