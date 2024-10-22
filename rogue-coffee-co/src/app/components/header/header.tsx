'use client';

import React, {useState} from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./header.module.css";


export default function Header() {
    
    const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="header">
    <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
        <a href="/">
            <Image src="/images/basic-removebg-preview.png" alt="Rogue Coffee Co." width={100} height={100}/>
        </a>
        </div>
        <nav className="header__nav">
        <GiHamburgerMenu className={styles.burger} onClick={() => setMenuOpen(true)} />
        <ul>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
        </ul>
        </nav>
    </div>
</header>
  );
}