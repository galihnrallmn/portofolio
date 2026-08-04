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

export default function Input(props: Props) {
  const { label } = props;

  if (props.textarea) {
    const { textarea, label, className, id, name, ...textareaProps } = props;

    const inputId = id ?? name;

    return (
      <div>
        <label htmlFor={inputId} className="mb-2 block font-medium">
          {label}
        </label>

        <textarea
          id={inputId}
          name={name}
          {...textareaProps}
          rows={6}
          className={`w-full rounded-2xl border border-slate-300 px-4 py-3 transition outline-none focus:border-blue-600 ${className ?? ""}`}
        />
      </div>
    );
  }

  const { textarea, label: _label, className, id, name, ...inputProps } = props;

  const inputId = id ?? name;

  return (
    <div>
      <label htmlFor={inputId} className="mb-2 block font-medium">
        {label}
      </label>

      <input
        id={inputId}
        name={name}
        {...inputProps}
        className={`w-full rounded-2xl border border-slate-300 px-4 py-3 transition outline-none focus:border-blue-600 ${className ?? ""}`}
      />
    </div>
  );
}
