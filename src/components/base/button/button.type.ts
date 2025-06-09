export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary";
  variant?: "contained" | "text";
};
