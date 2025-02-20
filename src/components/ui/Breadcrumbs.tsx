import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PagesAssets } from "../../assets/content/PagesAssets";

const findBreadcrumbPath = (pathname: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbPath: { name: string; target: string }[] = [];

    const findPath = (items: typeof PagesAssets, parentPath = "") => {
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

    findPath(PagesAssets);

    return breadcrumbPath;
};

const Breadcrumbs: React.FC<{ color?: string }> = ({ color }) => {
    const location = useLocation();
    const breadcrumbPages = findBreadcrumbPath(location.pathname);

    const getTarget = (itemTarget: string) => {
        const page = PagesAssets.find((p) => p.target === itemTarget);
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
                            className={`hover:-translate-y-0.5 transition-all  ${
                                isCurrentPage ? "font-bold text-petrol-400" : ""
                            }`}
                            style={{ color: isCurrentPage ? color : undefined }}
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
