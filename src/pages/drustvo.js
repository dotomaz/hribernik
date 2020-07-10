import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import drustvo1Img from '../images/drustvo1.jpg'
import drustvo2Img from '../images/drustvo2.jpg'
import drustvo3Img from '../images/drustvo3.jpg'
import drustvo4Img from '../images/drustvo4.jpg'
import drustvo5Img from '../images/drustvo5.jpg'
import drustvo6Img from '../images/drustvo6.jpg'
import drustvo7Img from '../images/drustvo7.jpg'

const DrustvoPage = () => (
    <Layout>
        <SEO title="Aleš Hribernik" />

        <div id="sidebar">
            <h1>Društvo</h1>
        </div>
        <div id="main">
            <h2>GLASBENO INSTRUMENTALNO DRUŠTVO POLZELA</h2>
            <p>
                Glasbeno instrumentalno društvo Polzela je začelo delovati leta 2004.
                To leto smo delovali kot kvintet in bili zelo ustvarjalni, saj smo se začeli
                udeleževati raznih festivalov, kot je na primer v Mariji Reki, kjer smo bili
                med občinstvom zelo dobro ocenjeni. Takrat smo delovali kot kvintet in bili
                zelo motivirani.
                </p>

            <p style={{ textAlign: 'center' }}>
                <img src={drustvo1Img} alt="Aleš Hribernik" />
            </p>
            <p>
                Igrali smo narodno zabavno in zabavno glasbo.  Nastopali smo na koncertih,
                prireditvah in zabavah. Igrali smo predvsem Avsenikove skladbe in skladbe
                od Alpskega kvinteta pa tudi svoje skladbe: Veseli godci in Po veselih tipkah,
                katere je vodja Aleš Hribernik iz svojega CD-ja priredil in napisal tudi za trobento
                in klarinet.</p>
            <p style={{ textAlign: 'center' }}>
                <img src={drustvo2Img} alt="Aleš Hribernik" />
            </p>
            <p>
                Tudi CD, ki  je bil posnet v studiu, je naletel na dober odziv poslušalcev.
                Še danes radi prisluhnejo skladbi Natalija in Skrita ljubezen, katere poleg drugih vrtijo na radiu Celje.
                V društvu pa izvajajo tudi etno glasbo, katere vodilni instrument je harmonika, ostala dva instrumenta pa sta
                zastareli pralni stroj ali »riflerca« in lončeni bas, kot dodatek pa zraven popestri glasbo malo novejši
                instrument, ki mu pravimo kazo. Ta zvrst glasbe pride v poštev na »ofiranjih« pa tudi na tekmovanjih,
                kot je Pokaži kaj znaš.
            </p>
            <p style={{ textAlign: 'center' }}>
                <img src={drustvo3Img} alt="Aleš Hribernik" />
            </p>
            <p>
                Za največjo čast pa si društvo šteje, da je sodelovalo z največjo legendo narodno zabavne
                glasbe na diatonični harmoniki žal že preminulem gospodom Lojzetom Slakom.</p>
            <p style={{ textAlign: 'center' }}>
                <img src={drustvo4Img} alt="Aleš Hribernik" />
            </p>
            <p>
                Ker pa kvintetovska zasedba ne deluje več, sedaj nastopamo v trio zasedbi po porokah, abrahamih,
                rojstnih dnevih in drugih zabavah.</p>
            <p style={{ textAlign: 'center' }}>
                <img src={drustvo5Img} alt="Aleš Hribernik" />
            </p>
            <p>Klarinet pa v zadnjem času močno zamenjuje kitara, saj lahko pri mnogih skladbah pomaga tudi z vokalom.</p>
            <p style={{ textAlign: 'center' }}>
                <img src={drustvo6Img} alt="Aleš Hribernik" />
            </p>
            <p>
                Pogledate si lahko našo spletno stran, ki pa je 
                <Link to="/">www.sms-send.net/hribernik</Link>,
                da si malo bolj preberete in poslušate inserte skladb. V kolikor bi se kdo želel naučiti igranja na diatonično,
                klavirsko harmoniko ali sintersizer pa naj pokliče na številko 031 719 165. Kadar pa nanese,
                da se imamo lepo pa se da ob harmoniki in kozarčku v en prešeren glas tudi zapeti.
            </p>
            <p style={{ textAlign: 'center' }}>
                <img src={drustvo7Img} alt="Aleš Hribernik" />
            </p>

        </div>

    </Layout >
)

export default DrustvoPage
