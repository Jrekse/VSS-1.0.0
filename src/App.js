import React, {Component} from 'react';

// Pages
import CatSelect from './Pages/CategorySelect';
import Category from './Pages/Category';
import PageSpon from './Pages/Pagesponsor';

// Sponsors
import noCat from './assets/js/sponsors/noCat.js';
import rvSpon from './assets/js/sponsors/rvSpon.js';
import boatspon from './assets/js/sponsors/boatSpon.js';
import fishequipspon from './assets/js/sponsors/fishEquipSpon.js';
import powerEquipSpon from './assets/js/sponsors/powerSpon';

// Post Data
import auction from './assets/js/Auctioneers.js';
import apparel from './assets/js/ApparelAccessories.js';
import construction from './assets/js/construction.js';
import Charters from './assets/js/ChartersGuides';
import education from './assets/js/education.js';
import FishingResorts from './assets/js/fishResort.js';
import Food from './assets/js/food.js';
import Furniture from './assets/js/furniture.js';
import gear from './assets/js/gear.js';
import govAgency from './assets/js/govAgency.js';
import Holsters from './assets/js/Holsters.js';
import hunterEd from './assets/js/huntersEd';
import insurance from './assets/js/insurance.js';
import Knives from './assets/js/knives.js';
import lodging from './assets/js/lodges.js';
import marina from './assets/js/marina.js';
import meat from './assets/js/meat.js';
import motorcycles from './assets/js/motorcycles.js';
import powerEquip from './assets/js/powerEquip.js';
import resturant from './assets/js/resturaunts.js';
import realty from './assets/js/realty.js';
import rvs from './assets/js/rv.js';
import safes from './assets/js/safes.js';
import sportFish from './assets/js/fishReward';
import sportingGoods from './assets/js/sportGoods.js';
import huntingGuide from './assets/js/huntingGuide'
import tourism from './assets/js/tourism.js';
import trucks from './assets/js/truckParts.js';
import air from './assets/js/airFreight.js';
import nonProfit from './assets/js/nprofit.js';
import FishEquip from './assets/js/fishEquip.js';
import FirearmCleaning from './assets/js/firearmCleaning.js';
import firearmAmmo from './assets/js/firearmAcces.js';
import boat from './assets/js/Boats.js';

import './App.css';

class App extends Component {
  state = {
    currentPage: ""
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "") {
      return <PageSpon data={noCat}/>;
    } else if (this.state.currentPage === "Air") {
      return <Category data={air}/>;
    } else if (this.state.currentPage === "Apparel") {
      return <Category data={apparel}/>;
    } else if (this.state.currentPage === "Boats") {
      return <><PageSpon data={boatspon}/><Category data={boat}/></>;
    } else if (this.state.currentPage === "FishingResorts") {
      return <Category data={FishingResorts}/>;
    } else if (this.state.currentPage === "Food") {
      return <Category data={Food}/>;
    } else if (this.state.currentPage === "Furniture") {
      return <Category data={Furniture}/>;
    } else if (this.state.currentPage === "Knives") {
      return <Category data={Knives}/>;
    } else if (this.state.currentPage === "Lodging") {
      return <Category data={lodging}/>;
    } else if (this.state.currentPage === "Power Equipment") {
      return <><PageSpon data={powerEquipSpon}/><Category data={powerEquip}/></>;
    } else if (this.state.currentPage === "Hunting Education") {
      return <Category data={hunterEd}/>;
    } else if (this.state.currentPage === "Sport Fishing") {
      return <Category data={sportFish}/>;
    } else if (this.state.currentPage === "Construction") {
      return <Category data={construction}/>;
    } else if (this.state.currentPage === "Charters") {
      return <Category data={Charters}/>;
    } else if (this.state.currentPage === "Education") {
      return <Category data={education}/>;
    } else if (this.state.currentPage === "Gear") {
      return <Category data={gear}/>;
    } else if (this.state.currentPage === "Government Agencies") {
      return <Category data={govAgency}/>;
    } else if (this.state.currentPage === "Hunting Guides") {
      return <Category data={huntingGuide}/>;
    } else if (this.state.currentPage === "Sporting Goods") {
      return <Category data={sportingGoods}/>;
    } else if (this.state.currentPage === "Auction") {
      return <Category data={auction}/>;
    } else if (this.state.currentPage === "Marina") {
      return <Category data={marina}/>;
    } else if (this.state.currentPage === "Meat Products") {
      return <Category data={meat}/>;
    } else if (this.state.currentPage === "Resturaunts") {
      return <Category data={resturant}/>;
    } else if (this.state.currentPage === "Realty") {
      return <Category data={realty}/>;
    } else if (this.state.currentPage === "Tourism") {
      return <Category data={tourism}/>;
    } else if (this.state.currentPage === "FirearmsAmmo") {
      return <Category data={firearmAmmo}/>;
    } else if (this.state.currentPage === "Firearm Cleaning") {
      return <Category data={FirearmCleaning}/>;
    } else if (this.state.currentPage === "Fishing Equipment") {
      return <><PageSpon data={fishequipspon}/><Category data={FishEquip}/></>;
    } else if (this.state.currentPage === "Holsters") {
      return <Category data={Holsters}/>;
    } else if (this.state.currentPage === "Insurance") {
      return <Category data={insurance}/>;
    } else if (this.state.currentPage === "Motorcycles") {
      return <Category data={motorcycles}/>;
    } else if (this.state.currentPage === "NonProfit") {
      return <Category data={nonProfit}/>;
    } else if (this.state.currentPage === "RV's") {
      return <><PageSpon data={rvSpon}/><Category data={rvs}/></>;
    } else if (this.state.currentPage === "Safes") {
      return <Category data={safes}/>;
    } else if (this.state.currentPage === "Trucks") {
      return <Category data={trucks}/>;
    } 
  };
  render(){
      return (
        <div className="App">
          <CatSelect currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}/>
          <br/>
          <div className="page">
            {this.renderPage()}
          </div>
        </div>
      )
  }
}

export default App;