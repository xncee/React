//import './Style.css';
import styles from './Style.module.css';

// There are two ways to use an external stylesheet in react:
// 1- create .css file and import it (import './Style.css'), and style your components normally.
// 2- create .module.css and import (import styles from './Style.module.css',
//    style normally and you can also access styles using the dot notaion (styles.className)

function CssExample() {
    return (
        <div>
            <h2 className={styles.name}>
                Hello World
            </h2>
        </div>
    );
}

export default CssExample;