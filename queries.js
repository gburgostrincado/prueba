const Pool = require('pg').Pool

const { Client } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: '123456',
    port: '5432'
})

// const connection = {
//     user: 'postgres',
//     host: 'localhost',
//     database: 'api',
//     password: '123456',
//     port: '5432'
// }

// const client = new Client(connection)


// const text = 'INSERT INTO posts (name, desciption) VALUES($1, $2) RETURNING *'
// const values = ['brianc', 'brian.m.carlson@gmail.com']
// // callback
// client.query(text, values, (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log(res.rows[0])
//     // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//   }
// })
// // promise
// client
//   .query(text, values)
//   .then(res => {
//     console.log(res.rows[0])
//     // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//   })
//   .catch(e => console.error(e.stack))
// // async/await
// try {
//   const res = await client.query(text, values)
//   console.log(res.rows[0])
//   // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
// } catch (err) {
//   console.log(err.stack)
// }




const getPots = (req, res) => {
    pool.query('SELECT * FROM posts', (err, results) => {
        if(err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const createPost = (req, res) => {
    const { name, description } = req.body

    pool.query('INSERT INTO posts (name, description) VALUES ($1, $2) RETURNING *', [name, description], (err, result) => {
        if(err) {
            throw err
        }
        res.status(201).send({message: 'Post agregado', data: result.rows[0] })
    })
}

const deletePost = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id], (err, result) => {
        if(err) {
            throw err
        }
        res.status(200).json({message: 'Post eliminado', data: result.rows[0]})
    })

}

module.exports = {
    getPots, 
    createPost,
    deletePost
}