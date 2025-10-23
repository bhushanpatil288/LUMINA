import { useState } from 'react'

const App = () => {


  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Understanding OSI Model",
      body: "The OSI Model is a conceptual framework used to understand network interactions in seven layers.",
      tags: ["networking", "college-notes"],
      createdAt: "2025-10-23",
    },
    {
      id: 2,
      title: "Java OOP Basics",
      body: "Encapsulation, inheritance, and polymorphism form the foundation of OOP in Java.",
      tags: ["java", "oop"],
      createdAt: "2025-10-22",
    },
  ]);


  return (
    <div>

      <header className='max-w-3xl border mx-auto p-6'>
        <h1 className='text-center mb-8'>Knowledge Base</h1>
        <p className='text-gray-600'>📚 A place to store your knowledge</p>
      </header>

      <section className='space-y-6'>
        {posts.map((post)=>{
          return <article 
            className='bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition'
            key={post.id}
          >
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-3">{post.body}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag)=>{
              return <span
                key={tag}
                className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full"
                >
                  #{tag}
                </span>
            })}
          </div>
          <p className="text-gray-400 text-sm mt-2">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          </article>
        })}
      </section>
    </div>
  );
}

export default App
