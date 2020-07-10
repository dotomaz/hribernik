import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import alesImg from '../images/ales.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Aleš Hribernik" />

      <div id="sidebar">
        <h1>O meni</h1>
      </div>
      <div id="main">
        <p style={{textAlign: 'left'}}>
          <img src={alesImg} alt="Aleš Hribernik" />
        </p>
        <p>
          Iščete pravega glasbenika? Povpraševanje mi lahko pošljete preko {' '}
          <a href="http://omisli.si/glasbenika/">Omisli.si/glasbenika</a>.
        </p>
        <p>
          Sem Hribernik Aleš, muzikant doma s Polzele. Na klavirsko harmoniko sem začel igrati  pred tridesetimi leti. 
          Pri triindvajsetih letih sem si kupil še diatonično harmoniko, malo pred tem pa še synthesizer. 
          Skupaj s prijatelji smo šli snemati s triom in pevko v studio. Na CD-ju so same avtorske skladbe in besedila. 
          Ansambel je bil ustanovljen kot trio, kasneje smo se pa preoblikovali v kvintet. 
          Zaradi obveznosti članov je ansambel razpadel, zato sedaj igram sam kot "one man band".
        </p>

        <h2>Kaj nudim</h2>
        <p>
          Igram tako narodno zabavno, kot tudi zabavno glasbo. Moj program obsega od 150 do 200 skladb različnih avtorjev, 
          od latina, disca, rock and roll-a, slow rock-a, salse in seveda polke in valčka.
        </p>

        <h2>Kje me lahko vidite</h2>

        <p>
          Najraje igram na porokah, abrahamih, obletnicah, sedaj pa v modo prihajajo tudi krsti in birme. 
          Glasbo prenašam že tudi na mlajše rodove ter na starejše, ki imajo veselje do glasbe. 
        </p>

        <p>
          <object width="550" height="330">
            <param name="movie" value="http://www.youtube.com/v/a-Uk9Ohd4RQ&hl=sl_SI&start=2360"></param>
            <param name="allowscriptaccess" value="always"></param>
            <embed src="http://www.youtube.com/v/a-Uk9Ohd4RQ&hl=en_US&start=2360" type="application/x-shockwave-flash" allowscriptaccess="always" width="550" height="330"></embed>
          </object>

        </p>

      </div>

  </Layout>
)

export default IndexPage
