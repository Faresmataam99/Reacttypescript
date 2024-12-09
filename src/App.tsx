
interface GreetingProps{
  name:String ;
}
const Greeting:React.FC<GreetingProps>= ({name})=> {
  return (
    <div>
      <h1>Good evening {name} </h1>
    </div>
  )
}
export default Greeting ;

//next code
