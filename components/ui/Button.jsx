import Link from 'next/link';
import classes from './Button.module.css';
export const Button = ({ children, link }) => <Link href={link}>
    <span className={classes.btn}>{children}</span>
</Link>;