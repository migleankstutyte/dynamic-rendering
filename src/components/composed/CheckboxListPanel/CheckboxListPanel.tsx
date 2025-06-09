import { useState } from "react";
import { Button, Input, List } from "../../base";
import { ComponentSchema } from "../../../registry/renderer.types";

import styles from "./checkboxListPanel.module.scss";

const CheckboxListPanel = ({ options, onSubmit }: ComponentSchema) => {
  const [checkedItems, setCheckedItems] = useState(() =>
    options.reduce((acc: ComponentSchema, opt: ComponentSchema) => {
      if (opt.checked) acc[opt.value] = true;
      return acc;
    }, {})
  );
  const [search, setSearch] = useState("");

  const handleCheck = (value: string) => {
    setCheckedItems((prev: ComponentSchema) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  const handleReset = () => {
    setCheckedItems({});
    setSearch("");
  };

  const handleSubmit = () => {
    const selected = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
    );
    if (onSubmit === "logToConsole") {
      console.log("Selected:", selected);
    }
  };

  const filtered = options
    .filter((opt: any) =>
      opt.title.toLowerCase().includes(search.toLowerCase())
    )
    .map((opt: any) => ({
      ...opt,
      checked: !!checkedItems[opt.value],
    }));

  return (
    <div className={styles.panel}>
      <Input
        value={search}
        onChange={setSearch}
        placeholder="Search for Payment Method"
      />
      <List items={filtered} onToggle={handleCheck} />
      <div className={styles.actions}>
        <Button onClick={handleReset} color="secondary" variant="text">
          Reset
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default CheckboxListPanel;
