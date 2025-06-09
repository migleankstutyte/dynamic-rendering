import ListItem from "../list-item/ListItem";
import { ListProps } from "./list.types";

import styles from "./list.module.scss";

const List = ({ items, onToggle }: ListProps) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <ListItem
          key={item.value}
          value={item.value}
          title={item.title}
          subtitle={item.subtitle}
          imageUrl={item.imageUrl}
          disabled={item.disabled}
          checked={item.checked ?? false}
          onToggle={onToggle}
        />
      ))}
      {items.length === 0 && (
        <div className={styles.list__empty}>No items found</div>
      )}
    </div>
  );
};

export default List;
