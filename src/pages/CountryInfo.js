import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom"
import Nav from '../components/Nav';
import '../css/CountryInfo.css';


function CountryInfo(props) {
  const [countryDetails, setCountryDetails] = useState([])
  const {name} = useParams()
  const {newStyles, toggleMode,good} = props;

  useEffect(() => {
    const api = `https://restcountries.com/v2/name/${name}`
    fetch(api)
    .then(response => response.json())
    .then(data => setCountryDetails(data))
         
  }, [name])

    return(
      <div className="country-info-main-container" style={newStyles.body}>
        <Nav newStyles={newStyles} toggleMode={toggleMode} good={good}/>
        <a href="#">
          <button className="button-back" style={newStyles.backArrowStyle}>
            <FontAwesomeIcon icon={faArrowLeft} className="arrow-left"/>
            Back          
          </button>
        </a>
         {
        countryDetails.map((items) => {
          const {flag,name, nativeName,population, region, subregion, capital, topLevelDomain, currencies, languages, borders, numericCode} = items || {}
          return(
                <div key={numericCode} className="country-info-container">
                    <img src={flag} alt="" className="country-info-flag"/>
                    <div className="country-info-container-details">
                      <div className="country-info-details">
                        <div className="country-info-text">
                          <h2 style={newStyles.h2}> {name} </h2>
                          <p style={newStyles.h2}><span className="countries-data-items">Native Name: </span> <span className="countries-data-result" style={newStyles.p}>{nativeName}</span></p>
                          <p style={newStyles.h2}><span className="countries-data-items">Population: </span> <span className="countries-data-result" style={newStyles.p}>{ new Intl.NumberFormat().format(population)}</span></p>
                          <p style={newStyles.h2}><span className="countries-data-items">Region: </span> <span className="countries-data-result" style={newStyles.p}>{region}</span></p>
                          <p style={newStyles.h2}><span className="countries-data-items">Sub Region: </span > <span className="countries-data-result" style={newStyles.p}>{subregion}</span></p>
                          <p style={newStyles.h2}><span className="countries-data-items">Capital: </span> <span className="countries-data-result" style={newStyles.p}>{capital}</span></p>
                        </div>
                        <div className="country-info-text-2">
                          <p style={newStyles.h2}><span className="countries-data-items">Top Level Domain: </span> <span className="countries-data-result" style={newStyles.p}>{topLevelDomain}</span></p>
                          <p style={newStyles.h2}><span className="countries-data-items">Currencies: </span> <span className="countries-data-result" style={newStyles.p}>{currencies[0].name}</span></p>
                          <div style={newStyles.h2}><span className="countries-data-items">Languages: </span> <span className="countries-data-result">
                            {
                              languages.map((items) => {
                                const {name, iso639_2} = items                                
                                return(
                                  <span key={iso639_2}  style={newStyles.p}>{ name} &nbsp;</span>                                    
                                )                               
                              })
                            }
                            </span>
                          </div> 

                        </div>
                      </div>
                      <div className="country-info-borders">  
                        <h3 style={newStyles.h2}>Border Countries :</h3>
                        <div className="country-info-borders-details">
                          { 
                            typeof(borders) !== 'undefined' ? 

                            borders.map((borderCountries)=> {
                              return(
                                <div key={borderCountries} className="border-countries" >
                                  <p className="border-countries-text" style={newStyles.p}>{borderCountries}</p>
                                </div>
                              )
                            }) : <div style={{width:"15rem"}}>{ `${name} does not have border countries`}</div>
                          }
                        </div>
                      </div>
                    </div>
                   </div>               
          )
        })
      }
      
      </div>
    )
}
         

export default CountryInfo