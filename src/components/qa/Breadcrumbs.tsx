import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getClusterTheme } from "@/utils/qa-utils";

interface BreadcrumbsProps {
  cluster?: number;
  questionTitle?: string;
}

const Breadcrumbs = ({ cluster, questionTitle }: BreadcrumbsProps) => {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/qa">Q&A Hub</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {cluster && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {questionTitle ? (
                <BreadcrumbLink asChild>
                  <Link to={`/qa/cluster/${cluster}`}>
                    Cluster {cluster}: {getClusterTheme(cluster)}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  Cluster {cluster}: {getClusterTheme(cluster)}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </>
        )}
        {questionTitle && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                {questionTitle}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;