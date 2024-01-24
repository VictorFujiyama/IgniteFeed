import styles from './Sidebar.module.css'
import { Avatar } from './Avatar.jsx'

import { PencilLine } from '@phosphor-icons/react'

export function Sidebar () {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/VictorFujiyama.png" />

                <strong>Victor Fujiyama</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}