import { InputHTMLAttributes } from 'react'
import styles from '../styles/modules/controls-modules/AppInput.module.css'

export interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
    stylesWrapper: string
}


export default function AppInput(props: AppInputProps) {
    const {stylesWrapper, className, ...other} = props
    return (
        <div className={`${styles.wrapper} ${stylesWrapper}`}>
            <input className={`${styles.input} ${className}`} type='text' {...other} />
        </div>
    )
}
