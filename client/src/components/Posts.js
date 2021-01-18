import { useSelector } from "react-redux"
import { deletePosts } from "../actions/postsActions"


const Posts = ({posts, dispatch}) => {
    const filterPosts = useSelector(state => state.filterPosts)
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Descriptcion</th>
                <th>Acción</th>
            </tr>
            </thead>
            <tbody>
            { filterPosts?.length > 0 ? filterPosts.map(post => (
                <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td><button className="btn btn-default" onClick={ () => dispatch(deletePosts(post.id))}>eliminar</button></td>
                </tr>
            )) 
            : posts.map(post => (
                <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td><button className="btn btn-default" onClick={ () => dispatch(deletePosts(post.id))}>eliminar</button></td>
                </tr>
            ))   
            }
            </tbody>
      </table>
    )
}

export default Posts