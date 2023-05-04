// localhost:8000
// localhost:8000/saveTool
// localhost:8000/editTool
// localhost:8000/deleteTool
import axios from 'axios';

const myURL = 'https://useful-dev-tools.onrender.com'

const getAllTools = (setTools) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
    setTools(data)
    })
}

const addTool = (image, setImage, title, setTitle, text, setText, toolLink, setToolLink, toolType, setToolType, setTools) => {
    axios.post(`${myURL}/saveTool`, { image, title, text, toolLink, toolType })
    .then((data) => {
        console.log(data)
        setImage('')
        setTitle('')
        setText('')
        setToolLink('')
        setToolType('')
        getAllTools(setTools)
    })
}

const editTool = (toolId, image, setImage, title, setTitle, text, setText, toolLink, setToolLink, toolType, setToolType, setEditing, setTools) => {
    axios.put(`${myURL}/editTool`, {_id: toolId, image, title, text, toolLink, toolType })
    .then((data) => {
        console.log(data)
        setImage('')
        setTitle('')
        setText('')
        setToolLink('')
        setToolType('')
        setEditing(false)
        getAllTools(setTools)
    })
}

const deleteTool = (_id, setTools) => {
    axios.post(`${myURL}/deleteTool`, { _id })
    .then((data) => {
        console.log(data)
        getAllTools(setTools)
    })
}

export { getAllTools, addTool, editTool, deleteTool };