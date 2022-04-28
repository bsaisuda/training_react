import { useState } from "react";

const Hello2 = () => {
  return (
    <div>
      <form>
        <Name/>
        <Age/>
        <Show name="default name" age="0"/>
	    </form>
    </div>
  )
}

const Name = () => {
  return (
    <div>
		  Name : <input type="text"/>
    </div>
  )
}

const Age = () => {
  return (
    <div>
		  Age : <input type="text"/>
    </div>
  )
}

const Show = ({name, age}) => {
  return (
    <div>
		  Hi, {name} with age = {age}
    </div>
  )
}

export default Hello2