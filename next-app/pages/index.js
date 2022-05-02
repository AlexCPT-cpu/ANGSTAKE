import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../constants/abi.js";
import { hexValue } from "ethers/lib/utils";
import { TxList } from "../constants/TxList.js";
import { ErrorMessage } from "../constants/ErrorMessage.js";
import { Bignumber } from "@ethersproject/bignumber";
import Link from 'next/link';



function Home() {
  
  return (
    <div className="devider">
      <header><nav>
    <h1 className="homep">
        <Link href="/pool1">
    <a><button className="butt">Return to angoratoken.com</button></a>
  </Link></h1></nav></header>
<section className="sect">
 <><form>
 <p>ANGORA TOKEN</p>
 <p>APY&nbsp;:&nbsp;10%</p>
        <p>7 DAYS LOCK</p>
        <p><label htmlFor="first"></label></p>
        <p>
        <Link href="/pool1">
    <a><button className="button">STAKE NOW</button></a>
  </Link></p></form><form>
          <p>
          </p>
        </form></></section>
        <section className="section">
 <><form>
 <p>ANGORA TOKEN</p>
 <p>APY&nbsp;:&nbsp;20%</p>
        <p>7 DAYS LOCK</p>
        <p><label htmlFor="first"></label></p>
        <p>
        <Link href="/pool2">
    <a><button className="button">STAKE NOW</button></a>
  </Link></p></form><form>
          <p>
          </p>
        </form></></section>
        <section className="section">
 <><form>
 <p>ANGORA TOKEN</p>
 <p>APY&nbsp;:&nbsp;30%</p>
        <p>90 DAYS LOCK</p>
        <p><label htmlFor="first"></label></p>
        <p>
        <Link href="/pool3">
    <a><button className="button">STAKE NOW</button></a>
  </Link></p></form><form>
          <p>
          </p>
        </form></>
        </section>
      
  </div>
  
);
}

export default Home