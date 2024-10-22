'use client';

import React, {useState} from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import styles from "./header.module.css";

export default function Header() {
    
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => { 
        setMenuOpen(!menuOpen);
    }
    
  return (
<header className="header">
    <div className={styles.headerContainer}>

    {menuOpen && (
        <nav className={styles.menu}>
          <button className={styles.closeMenu} onClick={toggleMenu}>
          <VscChromeClose />
          </button>
          <ul className={styles.list}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
        
        <div className={styles.headerLogo}>
        <a href="/">
            <Image src="/images/basic-removebg-preview.png" alt="Rogue Coffee Co." width={100} height={100}/>
        </a>
        </div>
        {!menuOpen && (
        <button className={styles.burger} onClick={toggleMenu}><GiHamburgerMenu /></button>
        )}
        
        

<div className={styles.headerTitle}>
            <h1>Rogue Coffee Co.</h1>
            </div>
        
    </div>
</header>
  );
}