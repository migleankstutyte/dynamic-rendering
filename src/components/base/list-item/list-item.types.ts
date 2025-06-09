export type ListItemProps = {
  value: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  disabled?: boolean;
  checked: boolean;
  onToggle: (value: string) => void;
};
