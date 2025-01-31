import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { pages } from "../../assets/content/pages";

const findBreadcrumbPath = (pathname: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbPath: { name: string; target: string }[] = [];

    const findPath = (items: typeof pages, parentPath = "") => {
        for (const item of items) {
            const itemPath = parentPath + (item.target || "");

            if (item.target && segments.includes(item.target.replace("/", ""))) {
                breadcrumbPath.push({ name: item.title, target: itemPath });
            }

            if (item.subpages) {
                findPath(item.subpages, itemPath);
            }
        }
    };

    findPath(pages);

    return breadcrumbPath;
};

const Breadcrumbs: React.FC<{ color?: string }> = ({ color = "white" }) => {
    const location = useLocation();
    const breadcrumbPages = findBreadcrumbPath(location.pathname);

    const getTarget = (itemTarget: string) => {
        const page = pages.find((p) => p.target === itemTarget);
        return page?.subpages ? `/home${itemTarget.replace("/", "#")}` : itemTarget;
    };

    return (
        <div className="flex flex-row items-center space-x-2 text-white/50 text-sm">
            {breadcrumbPages.map((item, i) => {
                const isCurrentPage = location.pathname === item.target;
                return (
                    <React.Fragment key={item.name}>
                        <Link
                            to={getTarget(item.target)}
                            className={`hover:-translate-y-0.5 transition-all ${
                                isCurrentPage ? "font-bold" : ""
                            }`}
                            style={{ color: isCurrentPage ? color : "" }}
                        >
                            {item.name}
                        </Link>
                        {i < breadcrumbPages.length - 1 && <ChevronRightIcon className="size-4" />}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
