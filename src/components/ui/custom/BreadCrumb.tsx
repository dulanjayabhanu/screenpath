import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {useNavigate} from "react-router";
import React from 'react';
import type {BreadCrumbProps} from "@/types/props/BreadCrumbProps.ts";

const BreadCrumb = ( { endpoints }: BreadCrumbProps ) => {
    const navigate = useNavigate()

    return (
        <section className="pt-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink onClick={() => navigate("/")}>
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {endpoints.map((endpoint, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {endpoint.path ? (
                                    <BreadcrumbLink onClick={() => navigate(endpoint.path || "/")}>
                                        {endpoint.name}
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>{endpoint.name}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </section>
    )
}

export default BreadCrumb