interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}
export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  return <header></header>;
};
