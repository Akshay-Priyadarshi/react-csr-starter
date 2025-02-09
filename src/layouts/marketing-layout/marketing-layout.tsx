import { MarketingHeader } from "@/components";
import { cn } from "@/utils";
import { ComponentProps, FC } from "react";

export type IMarketingLayoutProps = ComponentProps<"div">;

export const MarketingLayout: FC<IMarketingLayoutProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={cn("w-screen min-h-screen flex flex-col px-32", className)}>
      <MarketingHeader />
      <main className="flex-1 mb-8">{children}</main>
    </div>
  );
};
