import { Project } from "@/types";
import assets from "./assets";

const projects: Project[] = [
    {
        title: "Residential Interiors",
        link: "/",
        imgSrc: assets.residentialInteriors,
        icon: assets.home
    },
    {
        title: "Commercial Spaces",
        link: "/",
        imgSrc: assets.commerceSpace,
        icon: assets.building
    },

    {
        title: "Renovation & Remodeling",
        link: "/",
        imgSrc: assets.renovationRemodeling,
        icon: assets.factory
    },

    {
        title: "Concept Design",
        link: "/",
        imgSrc: assets.conceptDesign,
        icon: assets.sofa
    },

    {
        title: "Signage",
        link: "/",
        imgSrc: assets.sinage,
        icon: assets.signboard
    },

    {
        title: "Laser & CNC cutting",
        link: "/",
        imgSrc: assets.lasercutting,
        icon: assets.laser
    },


]
export default projects;



