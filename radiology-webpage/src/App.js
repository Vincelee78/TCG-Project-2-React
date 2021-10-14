import React from 'react';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/Carousel';
import AllCasesContent from './components/AllCasesContent';
import FeaturedCase from './components/FeaturedCase';
import FeaturedCaseContents from './components/FeaturedCaseContents';
import ErrorMessage from './components/Errormessage';
import Accordion from 'react-bootstrap/Accordion'






export default class App extends React.Component {
  state = {
    'active': 'home',  // indicate which page is active

  }

  setActive = () => {
    this.setState({
      'active': 'AllCasesContent'
    })
  }

  // showWrapper=()=>{
  //   return(<React.Fragment>
  //     <div class="wrapper">
  //         {this.state.active !== 'AllCasesContent' && <p class="title" id="title1"><FeaturedCase/></p>}
  //           <div class='fixed-bg bg-1'>
  //           </div>
  //           <div class="fixed-bg bg-2"><span class="title1" > </span></div>
  //           <div class="fixed-bg bg-3"><span class="title2" ></span></div>
  //         </div>

  //   </React.Fragment>)

  // }



  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar setActive1={this.setActive} />
          <div class='title3'>{this.state.active === 'AllCasesContent' ? <AllCasesContent /> : <CarouselComponent />}</div>

          {/* <p className='words'>
              COVID-19 (coronavirus disease 2019) is a viral infectious disease caused by 
              SARS-CoV-2 and is currently a World Health Organizatiοn (WHO) declared pandemic. 
              As of October 2021, over 200 million people had been infected globally with over 
              4.5 million deaths 13.

              Clinical presentation
              Many people with SARS-CoV-2 infection are asymptomatic 9. Symptoms and signs of COVID-19 are non-specific 1 but in symptomatic individuals most commonly include:

              fever (85-90%)
              cough (65-70%) with sputum (30-35%)
              smell and taste disturbances (50%) 12
              fatigue (35-40%)
              shortness of breath (15-20%)
              Complications
              The likelihood of severe illness requiring hospitalisation correlates closely with male sex, advanced age and presence of comorbidities.

              ~5% admitted patients require ICU admission
              Multiple serious sequelae have been reported including:

              acute respiratory distress syndrome (ARDS)
              coagulopathy: including PE and DIC
              secondary infections, e.g. bacterial pneumonia
              myocardial injury
              sepsis
              acute kidney injury (AKI)
              multiorgan failure
              secondary haemophagocytic lymphohistiocytosis
              Pathology
              SARS-CoV-2 is a member of the Betacoronavirus genus, one of the genera of the Coronaviridae family of viruses. SARS-CoV-2 is indirectly zoonotic, but transmission is now primarily interhuman. The closest animal coronavirus by genetic sequence is a bat coronavirus 5. The cause of death is usually respiratory failure secondary to massive alveolar injury.

              Radiographic features
              The primary findings of COVID-19 are those of an atypical or organising pneumonia 2,3. Up to 18% of cases demonstrate normal chest x-rays or CT when mild/early in the disease course 10. Bilateral and/or multilobar involvement is common, more often with a lower zone distribution.

              Plain radiograph
              patchy or diffuse airspace opacities, whether consolidation or ground-glass opacity 10,11
              pleural effusion is rare</p> */}
          <div class="wrapper">
            <Accordion defaultActiveKey="0" className='infoTab'>
              <Accordion.Item >
                <Accordion.Header eventKey="0">Information on Featured Case</Accordion.Header>
                <Accordion.Body>
                  <p><strong>COVID-19 (coronavirus disease 2019)</strong> is a viral infectious disease caused by 
                    <strong> SARS-CoV-2</strong> and is currently a World Health Organizatiοn (WHO) declared pandemic.
                    As of October 2021, over 200 million people had been infected globally with over
                    4.5 million deaths.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Clinical Presentation</Accordion.Header>
                <Accordion.Body>
                  <p>Many people with SARS-CoV-2 infection are asymptomatic. Symptoms and signs of COVID-19 are non-specific but in symptomatic individuals most commonly include:</p>
                  <ul>
                    <li>fever (85-90%)</li>
                    <li>cough (65-70%) with sputum (30-35%)</li>
                    <li>smell and taste disturbances (50%)</li>
                    <li>fatigue (35-40%)</li>
                    <li>shortness of breath (15-20%)</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Complications</Accordion.Header>
                <Accordion.Body>
                  <p>The likelihood of severe illness requiring hospitalisation correlates closely with male sex, advanced age and presence of comorbidities.</p>
                  <ul>
                    <li>~5% admitted patients require ICU admission</li>
                  </ul>
                  <p>Multiple serious sequelae have been reported including:</p>
                  <ul>
                    <li>acute respiratory distress syndrome (ARDS)</li>
                    <li>coagulopathy: including PE and DIC</li>
                    <li>secondary infections, e.g. bacterial pneumonia</li>
                    <li>myocardial injury</li>
                    <li>sepsis</li>
                    <li>acute kidney injury (AKI)</li>
                    <li>multiorgan failure</li>
                    <li>secondary haemophagocytic lymphohistiocytosis</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Radiographic features</Accordion.Header>
                <Accordion.Body>
                  <p>The primary findings of COVID-19 are those of an atypical or organising pneumonia. Up to 18% of cases demonstrate normal chest x-rays or CT when mild/early in the disease course. Bilateral and/or multilobar involvement is common, more often with a lower zone distribution.</p>
                  <h4>Plain radiograph:</h4>
                  <ul>
                    <li>patchy or diffuse airspace opacities, whether consolidation or ground-glass opacity</li>
                    <li>pleural effusion is rare </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Differential diagnosis</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>influenza or parainfluenza virus and other causes of atypical pneumonia</li>
                    <li>interstitial lung disease (ILD)</li>
                    <li>pulmonary oedema</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div class='innerwrapper'>
              {this.state.active !== 'AllCasesContent' && <p class="title" id="title1"><FeaturedCaseContents /></p>}

            </div>
            <div class='fixed-bg bg-1'>
            </div>
            <div class="fixed-bg bg-2"><span class="title1" > </span></div>

            <div class="fixed-bg bg-3"><span class="title2" ></span></div>

          </div>

        </div>

      </React.Fragment>
    );
  }
}


