import { Header } from './Components/Header.jsx'


import './global.css'
import styles from './App.module.css'
import { Sidebar } from './Components/Sidebar.jsx'
import { Post } from './Components/Post.jsx'

export function App(){
  return(

    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
)

}

