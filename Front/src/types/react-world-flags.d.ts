declare module "react-world-flags" {
  import { FC } from "react";

  interface FlagProps {
    code: string;
    height?: string | number;
    width?: string | number;
    fallback?: React.ReactNode;
  }

  export const Flag: FC<FlagProps>;
}
