import { ListItemProps } from "./list-item.types";

import styles from "./list-item.module.scss";

const ListItem = ({
  value,
  title,
  subtitle,
  imageUrl,
  disabled,
  checked,
  onToggle,
}: ListItemProps) => (
  <label htmlFor={value} className={styles.listItem}>
    <input
      className={styles.listItem__checkbox}
      id={value}
      name="payment-methods"
      type="checkbox"
      disabled={disabled}
      checked={checked}
      onChange={() => onToggle(value)}
    />
    <div className={styles.listItem__text}>
      <div className={styles[`listItem__text--title`]}>{title}</div>
      {subtitle && (
        <span className={styles[`listItem__text--subtitle`]}>{subtitle}</span>
      )}
    </div>
    {imageUrl && (
      <img src={imageUrl} alt={title} className={styles.listItem__image} />
    )}
  </label>
);

export default ListItem;
