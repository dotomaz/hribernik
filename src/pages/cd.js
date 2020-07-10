import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import alesImg from '../images/ales.jpg'

const CdPage = () => (
    <Layout>
        <SEO title="Aleš Hribernik" />

        <div id="sidebar">
            <h1>CD</h1>
        </div>
        <div id="main">

            <div style={{float:'right'}}>
                <img src={alesImg} alt="Aleš Hribernik" width="300" />
            </div>

            <h2>Z glasbo in pesmijo na pot</h2>
            <h3>Aleš Hribernik s prijatelji</h3>
            <ol>
                <li>
                    <b>Na martinovo</b> (3' 13)<br />
	                (A. Hribernik)
                </li>

                <li>
                    <b>Virštanjska</b> (3'08)<br />
                    (A. Hribernik)
                </li>

                <li>
                    <b>Resnične sanje</b> (3'12)<br />
                        (A. Hribernik)
                    </li>

                <li>
                    <b>V zidanici</b> (2' 47) <br />
                        (A. Hribernik)</li>
                <li>
                    <b>Govoril mi je</b> (3' 05)  <br />
                            (A. Hribernik)</li>
                <li>
                    <b>Veseli godci</b> (2'27)  <br />
                                (A. Hribernik)</li>

                <li>
                    <b>Na gasilski veselici</b> (3' 39)<br />
                                    (A. Hribernik)</li>

                <li>
                    <b>Natalija</b> (3' 58)<br />
                        (A. Hribernik)
                </li>

                <li>
                    <b>Po veselih tipkah</b> (2' 50)<br />
                    (A. Hribernik)
                </li>

                <li>
                    <b>Skrita ljubezen</b> (3' 17) <br />
                    (A. Hribernik)
                </li>
            </ol>

        </div>

    </Layout >
)

export default CdPage
