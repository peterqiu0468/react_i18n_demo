import flagUS from "../assets/us.svg";
import flagCN from "../assets/cn.svg";

interface FlagProps {
  width?: number;
}

function US({ width }: FlagProps) {
  const classnames = `rounded-full me-3 w-${width ?? 5} h-${width ?? 5}`;
  return <img src={flagUS} className={classnames} />;
}

function CN({ width }: FlagProps) {
  const classnames = `rounded-full me-3 w-${width ?? 5} h-${width ?? 5}`;
  return <img src={flagCN} className={classnames} />;
}

export const Flag = {
  US,
  CN,
};
