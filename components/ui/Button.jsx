import Link from 'next/link';
import classes from './Button.module.css';
export const Button = ({ children, link, onClick }) => {
    if (link) return <Link href={link}>
        <span className={classes.btn}>{children}</span>
    </Link>;

    return <button className={classes.btn} onClick={onClick}>
        {children}
    </button>;
}