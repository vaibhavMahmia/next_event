import classes from './LogisticsItem.module.css';

export const LogisticsItem = ({ icon: Icon, children }) => <li className={classes.item}>
  <span className={classes.icon}>
    <Icon />
  </span>
  <span className={classes.content}>{children}</span>
</li>;
