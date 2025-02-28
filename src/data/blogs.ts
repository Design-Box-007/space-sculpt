import { Blog } from "@/types";
import assets from "./assets";
import Blog1 from "./Blogs/Blog1";

export const blogListData: Blog[] = [
    {
        title: "5 Interior Design Trends for Modern Spaces",
        description: "Creative solutions to make the most of compact living spaces without sacrificing style.",
        imgSrc: assets.Blog1,
        component: Blog1

    },
    {
        title: "Minimalist Home Decor Ideas",
        description: "Discover how to create a cozy, clutter-free home with a minimalist approach.",
        imgSrc: assets.Blog2,
        component: Blog1

    },
    {
        title: "How to Choose the Right Color Palette",
        description: "A guide to selecting the perfect colors to match your home’s aesthetic.",
        imgSrc: assets.Blog3,
        component: Blog1

    },
    {
        title: "Smart Furniture for Small Apartments",
        description: "Explore space-saving furniture solutions designed for compact living areas.",
        imgSrc: assets.Blog4,
        component: Blog1

    },
    {
        title: "Sustainable Interior Design",
        description: "Learn how to incorporate eco-friendly materials and practices into your home decor.",
        imgSrc: assets.Blog5,
        component: Blog1

    },
    {
        title: "Bohemian Style: A Cozy Home Makeover",
        description: "Find out how to achieve a relaxed, artistic, and warm bohemian-style home.",
        imgSrc: assets.Blog6,
        component: Blog1

    },
    {
        title: "Luxury Interior Designs on a Budget",
        description: "Affordable ways to bring a touch of luxury into your home without breaking the bank.",
        imgSrc: assets.Blog7,
        component: Blog1

    },
    {
        title: "The Art of Wall Decor",
        description: "Tips on decorating your walls with art, wallpaper, and creative designs.",
        imgSrc: assets.Blog8,
        component: Blog1

    },
    {
        title: "Modern Kitchen Designs That Inspire",
        description: "Explore trending kitchen designs that blend functionality with aesthetics.",
        imgSrc: assets.Blog9,
        component: Blog1

    },
];
