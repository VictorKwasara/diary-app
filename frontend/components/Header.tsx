import React from 'react'
import Link from "next/link"
import MuiLink from "@mui/material/Link"
import AppBar from '@mui/material/AppBar';
import styles from "/styles/Header.module.css";
import dynamic from "next/dynamic"

const WalletMultiButton = dynamic(
	async () =>
		(await import('@solana/wallet-adapter-material-ui')).WalletMultiButton,
	{ ssr: false }
);

const Header = () => {
  return (
		<>
			<AppBar position='static' color='transparent' className={styles.appbar}>
				<Link href='/notes'>Notes</Link>

				<Link href='/new'>Make Note</Link>

				<WalletMultiButton />
			</AppBar>
		</>
	);
}

export default Header                   