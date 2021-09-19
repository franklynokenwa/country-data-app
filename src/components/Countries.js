import React,{useState} from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom'
import '../css/Countries.css';
import Search from './Search';
import  '../css/ThemeSwitcher.css';

  function Countries(props) {
    const {data,newStyles, toggleMode,good, toggleSearchIconDisplay} = props;
    const [searchedValue, setSearchedValue] = useState("") ;
    const [filteredData, setFilteredData] = useState([]);

    function displaySearchedItem(event){
      setSearchedValue(event.target.value)
      const newFilter = data.filter((value) => {
          return value.name.toLowerCase().includes(searchedValue.toLowerCase())
        });
        setFilteredData(newFilter)            
    } 

    return(
      <div className="components" style={newStyles.body}>
        <Nav 
          newStyles={newStyles} 
          toggleMode={toggleMode} 
          good={good}
        />
        <Search 
          displaySearchedItem={displaySearchedItem} 
          newStyles={newStyles} 
          toggleSearchIconDisplay={toggleSearchIconDisplay}
        />

        <div className="countries">
        { searchedValue === "" ? 
        data.map((items) => {
          const {name, population, region, capital, flag, numericCode} = items
          return( 
              <div key={numericCode} className="countries-container" >
                <div className='countries-container-individual' style={newStyles.countriesContainerColor}>
                  <Link to={`/countries/${name}`} className="countries-link">  
                    <img src={flag} alt="" className="flag"/>
                    <div className="countries-data">
                      <h2 style={newStyles.h2}> {name} </h2>
                      <p style={newStyles.p}><span className="countries-data-items"> Population: </span> <span className="countries-data-result" style={newStyles.p}>{new Intl.NumberFormat().format(population) }</span></p>
                      <p style={newStyles.p}> <span className="countries-data-items"> Region: </span> <span className="countries-data-result" style={newStyles.p}>{region}</span></p>
                      <p style={newStyles.p}><span className="countries-data-items"> Capital: </span> <span className="countries-data-result" style={newStyles.p}>{capital}</span></p>
                    </div>
                  </Link>  
                </div>  
              </div>
          )
        }) 
        :                      
        filteredData.map((items) => {
            const {name, population, region, capital, flag, numericCode} = items;
            console.log(items);
            return(
              <div>                
                <div key={numericCode} className="countries-container" >
                  <div className='countries-container-individual' style={newStyles.countriesContainerColor}>
                    <Link to={`/countries/${name}`} className="countries-link" >
                      <img src={flag} alt="" className="flag"/>
                      <div className="countries-data">
                        <h2 style={newStyles.h2}> {name} </h2>
                        <p style={newStyles.p}><span className="countries-data-items"> Population: </span> <span className="countries-data-result" style={newStyles.p}>{new Intl.NumberFormat().format(population) }</span></p>
                        <p style={newStyles.p}> <span className="countries-data-items"> Region: </span> <span className="countries-data-result" style={newStyles.p}>{region}</span></p>
                        <p style={newStyles.p}><span className="countries-data-items"> Capital: </span> <span className="countries-data-result" style={newStyles.p}>{capital}</span></p>
                      </div>
                    </Link>
                  </div>  
                </div>             
              </div>                        
                            
              )
            })
      
        }
          </div>
        </div> 
    )
  }
  

  export default Countries