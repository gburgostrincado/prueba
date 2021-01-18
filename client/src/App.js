import { useEffect } from 'react'
import './style.css'
import { getPosts, } from './actions/postsActions'
import { useDispatch, useSelector} from 'react-redux'
import Search from './components/Search'
import Posts from './components/Posts'
import Form from './components/Form'

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const isLoading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.error)


  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="container">
      <Search />
      {isLoading ? 
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      : <Posts 
          posts={posts}
          dispatch={dispatch}
        />
      }
      {error && <p className="text-danger">{error}</p>}
     <Form
      dispatch={dispatch}
     />
    </div>
  );
}


export default App;
