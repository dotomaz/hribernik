import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import alesImg from '../images/ales.jpg'

const ContactPage = () => (
    <Layout>
        <SEO title="Aleš Hribernik" />

        <div id="sidebar">
            <h1>Kontakt</h1>
        </div>
        <div id="main">
            <p>
                <b>Aleš Hribernik</b><br />
                Glavni trg 40<br />
                3313 Polzela<br />
                (031) 719 165<br />
                <a href="mailto:hribernik.ales@telemach.net">hribernik.ales@telemach.net</a>
            </p>

        </div>

    </Layout >
)

export default ContactPage
