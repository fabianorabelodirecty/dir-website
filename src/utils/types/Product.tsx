import { ReactNode } from "react";

export interface Benefits {
    title: string;
    icon: ReactNode;
    content: string;
}

export interface Product {
    name: string;
    cta: string;
    desc: string;
    phrase: string;
    page: string;
    contactTitle: string;
    contactSub: string;
    contentText: string;
    pagePhrase: string;
    pageDesc: string;
    reasons: Benefits[];
}
