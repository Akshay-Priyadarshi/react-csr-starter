import { MarketingLayout } from "@/layouts";
import PageNotFound from "@/assets/page-not-found.svg?react";
import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <MarketingLayout>
      <div className="flex flex-col gap-16 justify-center items-center h-full">
        <PageNotFound className="w-1/2 h-1/2" />
        <Link to="/">Seems like you are lost! Go Back To Homepage</Link>
      </div>
    </MarketingLayout>
  );
};
