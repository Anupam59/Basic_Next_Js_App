import React, {Component} from 'react';
import Link from "next/link";
import Head from "next/head";
import Style from "../css/style.module.css";

class Contact extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Contact Page</title>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="Free Web tutorials"/>
                    <meta name="keywords" content="HTML, CSS, JavaScript"/>
                    <meta name="author" content="Anupam Talukdar"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>

                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/login">Login</Link></li>
                </ul>
                <h1 className={Style.myText}>This is Contact page</h1>
            </div>
        );
    }
}

export default Contact;