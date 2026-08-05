import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
  label: string;
}

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    textarea?: false;
  };

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    textarea: true;
  };

type Props = InputProps | TextareaProps;

const fieldClassName =
  "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 " +
  "transition outline-none placeholder:text-slate-400 focus:border-blue-600 " +
  "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500";

export default function Input(props: Props) {
  const { label } = props;

  if (props.textarea) {
    const { textarea, label, className, id, name, ...textareaProps } = props;

    const inputId = id ?? name;

    return (
      <div>
        <label
          htmlFor={inputId}
          className="mb-2 block font-medium text-slate-900 dark:text-slate-100"
        >
          {label}
        </label>

        <textarea
          id={inputId}
          name={name}
          {...textareaProps}
          rows={6}
          className={`${fieldClassName} ${className ?? ""}`}
        />
      </div>
    );
  }

  const { textarea, label: _label, className, id, name, ...inputProps } = props;

  const inputId = id ?? name;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block font-medium text-slate-900 dark:text-slate-100"
      >
        {label}
      </label>

      <input
        id={inputId}
        name={name}
        {...inputProps}
        className={`${fieldClassName} ${className ?? ""}`}
      />
    </div>
  );
}
