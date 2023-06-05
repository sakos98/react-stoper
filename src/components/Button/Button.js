import styles from '../Button/Button.module.scss'

const Button = props => {
  return (<button className={styles.button} onClick={props.onClick}>{props.children}</button>);
}

export default Button;