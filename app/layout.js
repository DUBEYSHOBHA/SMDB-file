"use client"
import './globals.css'
import './globalsswiper.css'
import './testimonial.css'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



export default function RootLayout({ children }) {
    return ( < html lang = "en" >
        <
        body suppressHydrationWarning >
        <
        Navigation / >

        { children }

        <
        Footer / >
        <
        /body> < /
        html >
    )
}