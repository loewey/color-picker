import React,{useState} from 'react'


function ColorPicker(){
    const [color,setColor] = useState("#FFFFF")


    function backgroundColorHandler(event){
        setColor(event.target.value)
    }

    return(
        <div>
            <h2>Color Picker</h2>
            <div className='color-display' style={{backgroundColor:color}}>
                <h3 className='color-text'>Select a color</h3>
                <p className='color-text'>{color}</p>
            </div>
            <label for="colorPicker">Pick a color:</label>
            <input type='color' onChange={backgroundColorHandler}></input>
        </div>
    )
}
export default ColorPicker