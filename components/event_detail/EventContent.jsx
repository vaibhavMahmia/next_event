import classes from './EventContent.module.css';

export const EventContent = ({ children }) => <section className={classes.content}>
  {children}
</section>;
