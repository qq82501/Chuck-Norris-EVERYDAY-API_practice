import React, {Component} from "react";
import Selection from "../component/Selection"
import SelectedJoke from "../component/SelectedJoke";
import GetRandomJoke from "../component/GetRandomJoke";
import "./App.css";

class App extends Component{
  constructor(){
    super()
    this.state = {
      today_joke : [],
      selectionList : [],
      selectedCate : '',
      cateJoke : []
    }
  }
  
  componentDidMount(){
    fetch("https://api.chucknorris.io/jokes/random")
                .then((response)=>response.json())
                .then((joke)=>this.setState({today_joke:joke}))

    fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => (response.json()))
    .then(list =>{this.setState({selectionList:list})})

  }

  onItemChanged=(event)=>{
    // this.setState({selectedCate:event.target.value},function(){console.log('???',this.state.selectedCate)})
    fetch(`https://api.chucknorris.io/jokes/random?category=${event.target.value}`)
    .then(response => (response.json()))
    .then(cate =>{this.setState({cateJoke:cate})})
 
  }

  
  render(){
    const {today_joke, selectionList,selectedCate,cateJoke} = this.state
    console.log('ss',cateJoke)
    console.log('s',selectedCate)

    return(
      <div>
        <h1 className='tc hd'>Chuck-Norris EVERYDAY!</h1>
        <p className='tc hd subhd'>Giving you all the "CHUNCKNORRISING" jokes delights your day</p>
        <div className="container">
          <div className="jk-card">
            <h2>Joke for today:</h2>
            <GetRandomJoke today_joke ={today_joke} />
          </div>
          <h3 className="tc">Wanna more? Choose a category you're interested</h3>
          <hr/>
          <div className="btn-div">
            <div className='fl w-50 pa2 sldiv'>
              <Selection selectionList={selectionList} itemChanged={this.onItemChanged}/>
            </div>
            <div className='fl w-50 pa2'>
              <SelectedJoke cateJoke={cateJoke}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
