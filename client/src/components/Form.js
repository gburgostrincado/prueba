import { useState } from 'react'
import { addPosts} from '../actions/postsActions'
import { ERROR } from '../types'

const Form = ({dispatch}) => {
    const [data, setData] = useState({
        name: '',
        description: ''
      })
    
    const handleChange = (e) => setData({...data, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault()
        if(data.name && data.description) {
            dispatch(addPosts(data))
            setData({name: '', description: ''})
            document.getElementById('name').focus()
            dispatch({type: ERROR, payload: ''})
        } else {
            dispatch({type: ERROR, payload: 'debe llenar los campos'})
        }
        
    }

    return (
        <form className="form" onSubmit={onSubmit}>    
            <input type="text" className="form-control" id="name" placeholder="nombre" name="name" onChange={ handleChange } value={data.name} />
            <input type="text" className="form-control" placeholder="Descripcion" name="description" onChange={handleChange} value={data.description} />
            <button className="btn btn-primary">Crear</button>
        </form>
    )
}

export default Form