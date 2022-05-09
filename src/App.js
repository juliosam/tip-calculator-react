
import InputArea from './InputArea.js';
import OutputArea from './OutputArea.js';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <InputArea/>
        <OutputArea/>

      </div>
      
    </div>
  );
}

export default App;

// const BlogList = ({blogs,title}) => {

//   return ( 
//       <div className="blog-list">
//            <div>
//                <h1>{title}</h1>
//               {blogs.map(blog =>(
//                   <div className="blog-preview" key={blog.id}>
//                       <h2>{blog.title}</h2>
//                       <p>Written by {blog.author}</p>
//                   </div>
//               ))}

//           </div>  
//       </div>
//    );
// }

// export default BlogList;

// import { useState } from "react";
// import BlogList from "./BlogList.js";

// const Home = () => {

//     const [blogs, setBlogs] = useState(null);


//     return ( 
//         <div className="home">
//            {blogs && <BlogList blogs={blogs} title='All blogs!' />}
//         </div>
//      );
// }
 
// export default Home;

// const Navbar = () => {
//   return ( 
//       <nav className="navbar">
//           <h1>This is a Navbar</h1>
//           <div className="links">
//             <a href="/">Home</a>
//             <a href="/create">New Blog</a>
//           </div>
//       </nav>
//    );
// }

// export default Navbar ;
