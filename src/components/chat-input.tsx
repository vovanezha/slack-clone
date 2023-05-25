import { useRef } from 'react';

type Props = {
  placeholder?: string;
  className?: string;
  onSubmit: (body: string) => void;
};

// use contenteditable and make it a11y-friendly
export const ChatInput = ({ placeholder = 'Type something', onSubmit, className }: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  return (
    <textarea
      ref={ref}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          onSubmit(ref.current!.value);
          ref.current!.value = '';
        }
      }}
      rows={1}
      placeholder={placeholder}
      className={`${className} w-full border border-solid border-gray-300`}
    />
  );
};
