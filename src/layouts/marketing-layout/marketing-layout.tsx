import { MarketingHeader } from "@/components";
import { useTheme } from "@/providers";
import { cn } from "@/utils";
import { ComponentProps, FC } from "react";

export type IMarketingLayoutProps = ComponentProps<"div">;

export const MarketingLayout: FC<IMarketingLayoutProps> = (props) => {
  const { className, children } = props;
  const { themeClass } = useTheme();
  return (
    <>
      <link
        rel="icon"
        type="image/x-icon"
        href={
          themeClass === "light"
            ? "/favicon-32x32-dark.ico"
            : "/favicon-32x32-light.ico"
        }
      />
      <div
        className={cn("w-screen min-h-screen flex flex-col px-32", className)}
      >
        <MarketingHeader />
        <main className="flex-1 mb-8">{children}</main>
      </div>
    </>
  );
};
