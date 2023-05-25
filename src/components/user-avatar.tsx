type Props = {
  src: string;
  size?: 's' | 'm' | 'l';
  className?: string;
};

export const UserAvatar = ({ src, size = 'm', className }: Props) => (
  <img
    src={src}
    alt="User avatar"
    className={`rounded object-cover ${{ s: 'h-7 w-7', m: 'h-10 w-10', l: 'h-12 w-12' }[size]} ${className}`}
  />
);
