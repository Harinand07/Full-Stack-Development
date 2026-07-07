// import express from 'express';
// const app = express();

// const port = 4000;
// // ===========================READ DATA_=========================>
// // app.get('/',(req,res)=>{
// //     res.send('<h1>Welcome to Backend Server</h1>');
// // })
// // app.get('/about',(req,res)=>{
// //     res.send("<h1>This is about page</h1>");
// // })

// // app.get('/page/job',(req,res)=>{
// //     res.send("<h1>This is job page</h1>");
// // })

// // app.get('/page/contact',(req,res)=>{
// //     res.send("<h1>This is contact page</h1>");
// // })
// // app.listen(port,()=>{
// // console.log('server is running in port:',port);
// // })

// //-----------------------------CREATE DATA------------------------------>

// let students = ['ankit','sachin','rohit','rahul'];
// app.get('/',(req,res)=>{
//     res.json({
//         data:students,
//         success:true,
//         message:"data fetched successfully"
//     })
// })


// app.post('/createStudent',(req,res)=>{
//     const {name} = req.body;
//     students.push(name);
//     res.json({
//         data:students,
//         success:true,
//         message:"student created successfully"
//     })
// })

import express from 'express'


const app = express()

const port = 4000

app.use(express.json())



// app.get('/', (req,res)=>{
//     res.send("<h1>Welcome to Backend...</h1>")
// })




// app.get('/about', (req,res)=>{
//     res.send('<h1>This is About Page</h1>')
// })





// let students = [
//     {
//         name:'Ankit',
//         age:27

//     },
//     {
//         name:'Rahul',
//         age:23
//     },
//     {
//         name:'Priya',
//         age:40
//     }
// ]


let students = ['ankit', 'Rahul', 'Priya']

 
app.get('/getStudents', (req,res)=>{
    res.json({
        data:students,
        success:true,
        message: 'data fetched successfully'
    })
})


  app.post('/createStudent', (req,res)=>{
            const name = req.body.name
            students.push(name)

            console.log(students)

            res.json({
                success:true,
                message:'data create successfully',
                students
            })
  })


//   console.log(students)


// app.put()    

// app.delete()




// API 1 'page/job'

// API 2 'page/contact'
 

app.listen(port, ()=>{                                            
    console.log('server is running in port : ', port)
})

app.get('/getUser',(req,res)=>{
    res.json({
        success:true,
        message:'data fetched successfully',
        data:students
    })
})

app.post('/createUser',(req,res)=>{
    const {name} = req.body
    students.push(name)
    console.log(students)
    res.json({
        success:true,
        message:'user created successfully',
        students
    })
})

//app.put
app.put('/updateuser',(req,res)=>{
    const {name,newName} = req.body
    let index = students.indexOf(name)

    students[index]=newName
    res.json({
        success:true,
        message:'User updated successfully',
        data:students
    })

    //app.delete
    app.delete('/deleteuser',(req,res)=>{
        const {name} = req.body
        const index = students.indexOf(name)
        students.splice(index,1)
        res.json({
            success:true,
            message:'User deleted successfully',
            data:students
        })
    })
})