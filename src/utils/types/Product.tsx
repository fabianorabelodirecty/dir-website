import { Benefits } from "./_Benefits";

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
    picture: string;
    auxPic: string;
}
