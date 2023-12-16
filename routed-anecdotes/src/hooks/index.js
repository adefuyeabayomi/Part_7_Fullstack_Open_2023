import {useState} from "react"

let useField = (type) => {
    let [value,setValue] = useState('')
    let onChange = function (event) {
        setValue(event.target.value)
    }
    let clear = function (){
        setValue("");
    }
    return {
        type,
        value,
        onChange,
        clear
    }
}
export { useField }