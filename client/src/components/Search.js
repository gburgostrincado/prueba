import { useState } from "react"
import { useDispatch } from 'react-redux'
import { searchPost } from "../actions/postsActions"


const Search = () => {
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')

    const onSearch = (e) => {
        e.preventDefault();
        dispatch(searchPost(search))
      }
    return (
        <form className="search-container" onSubmit={onSearch}>
            <input type="text" className="form-control" placeholder="Buscar por nombre..." name="search" onChange={(e) => setSearch(e.target.value) } value={search} />
            <button className="btn btn-primary" onClick={onSearch} >Buscar</button>
        </form>
    )
}

export default Search