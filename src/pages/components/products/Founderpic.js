import React,{ useState } from "react";


function Founderpic(params) {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <>
        <div className='img-spoi'>
            <label>  Click to choose a file </label>
            <img src={file} id="smj"/>
            <input type="file" className='flio' onChange={handleChange} />
        </div>
        </>
    );
}
export default Founderpic;