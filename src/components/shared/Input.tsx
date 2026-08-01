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
    const { textarea, label, className, ...textareaProps } = props;

    return (
      <div>
        <label className="mb-2 block font-medium">{label}</label>

        <textarea
          {...textareaProps}
          rows={6}
          className={`
            w-full
            rounded-2xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-600
            ${className ?? ""}
          `}
        />
      </div>
    );
  }

  const { textarea, label: _label, className, ...inputProps } = props;

  return (
    <div>
      <label className="mb-2 block font-medium">{label}</label>

      <input
        {...inputProps}
        className={`
          w-full
          rounded-2xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-600
          ${className ?? ""}
        `}
      />
    </div>
  );
}
