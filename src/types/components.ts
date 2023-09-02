export interface IAlertProps {
  type: "success" | "error" | "warning";
  message: string;
}

export interface IDarkSwitchProps {
  setTheme: (theme: "light" | "dark") => void;
  theme: string;
}

export interface IAuthTitleProps {
  title: string;
  subtitle: string;
}

export interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "password" | "text";
  placeholder?: string;
  label?: string;
  name?: string;
  prefix?: React.ReactNode;
  required?: boolean;
}

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  disabled?: boolean;
  label: string;
}

export interface IAuthNavigateProps {
  text: string;
  navText: string;
  navLink: string;
}

export interface IToastProps {
  theme: "light" | "dark" | "colored";
}

export interface IReceiptFormProps {
  logo: string;
  fields: Array<string>;
  onBack?: () => void;
}

export interface ISelectProps {
  options: {
    key: string;
    value: string;
  }[];
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  default?: string;
  name?: string;
  required?: boolean;
}
