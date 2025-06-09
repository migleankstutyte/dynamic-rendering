import { ErrorMessageProps } from "./errorMessage.type";

const ErrorMessage = ({ title, description }: ErrorMessageProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ErrorMessage;
