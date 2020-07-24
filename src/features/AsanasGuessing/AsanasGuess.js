import React, { Component } from 'react';
import './asanas.css';

// import { connect } from 'react-redux';


class AsanasGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asanas: [],
      randomAsanas: {},
      randomOptions: [],
      userIsWin: '',
      disableFieldset: false,
      goodGuess: 0,
      bgColor: { backgroundColor: '#e1e2e1' }
    }
    this.getRandomAsanas = this.getRandomAsanas.bind(this);
    this.checkWin = this.checkWin.bind(this);
  }

  componentDidMount() {
    // const apiUrlLocal = "http://localhost:3001/asanas";
    const apiUrlRemote = "https://raw.githubusercontent.com/rodolphe37/asanas-guess-game-free-version/master/api-server/data/asanas.json"
    // fetch(apiUrlLocal)
    fetch(apiUrlRemote)
      .then(data => data.json())
      .then(asanas => this.setState({ asanas }))
      .then(this.getRandomAsanas)
  }


  getRandomAsanas() {
    const random = this.state.asanas[Math.floor(Math.random() * this.state.asanas.length)];
    const randomOpt1 = this.state.asanas[Math.floor(Math.random() * this.state.asanas.length)];
    const randomOpt2 = this.state.asanas[Math.floor(Math.random() * this.state.asanas.length)];
    const randomOpt3 = this.state.asanas[Math.floor(Math.random() * this.state.asanas.length)];
    const randomOptions = [random.nameFr, randomOpt1.nameFr, randomOpt2.nameFr, randomOpt3.nameFr];
    randomOptions.sort(() => { return 0.5 - Math.random() });
    this.setState({
      randomAsanas: random,
      randomOptions: randomOptions,
      userIsWin: '',
      benefices: random.benefices,
      sanskritName: random.sanskritName,
      difficulte: random.difficulte,
      disableFieldset: false
    })
  }

  checkWin(e) {
    this.setState({
      disableFieldset: true
    })
    const winAsanas = this.state.randomAsanas.nameFr;
    const userGuess = e.target.value;
    if (winAsanas === userGuess) {
      this.setState({
        userIsWin: 'Win',
        goodGuess: this.state.goodGuess + 1,
        bgColor: { backgroundColor: '#81C784' }
      })
    } else {
      this.setState({
        userIsWin: 'Lose',
        bgColor: { backgroundColor: '#FF8A65' }
      })
    }
    setTimeout(() => {

      this.setState({
        userIsWin: '',
        disableFieldset: false,
        bgColor: { backgroundColor: 'white' }
      })
      this.getRandomAsanas();
    }, 2000)

  }

  // scoreColor = () => {
  //   this.setState({
  //     goodGuess: this.state.goodGuess
  //   })
  //   if (this.state.goodGuess >= 31) {
  //     return (
  //       <h2 className="purple">Score :  {this.state.goodGuess}</h2>
  //     )
  //   }
  //   if (this.state.goodGuess >= 25) {
  //     return (
  //       <h2 className="indigo">Score :  {this.state.goodGuess}</h2>
  //     )
  //   }
  //   if (this.state.goodGuess >= 20) {
  //     return (
  //       <h2 className="turquoise">Score :  {this.state.goodGuess}</h2>
  //     )
  //   }
  //   if (this.state.goodGuess >= 15) {
  //     return (
  //       <h2 className="green">Score :  {this.state.goodGuess}</h2>
  //     )
  //   }
  //   if (this.state.goodGuess >= 10) {
  //     return (
  //       <h2 className="yellow">Score :  {this.state.goodGuess}</h2>
  //     )
  //   }
  //   if (this.state.goodGuess >= 5) {
  //     return (
  //       <h2 className="orange">Score :  {this.state.goodGuess}</h2>
  //     )
  //   }
  //   this.scoreColor()
  // }


  render() {
    this.goodGuess = this.props.goodGuess;
    return (
      <div className="main-asanas" >
        <div className="flex-guess">
          <div className="wrapper-guess" style={this.state.bgColor}>
            <h2 className="score-view">{this.state.userIsWin === 'Win' ? "Bravo !   " : ''}
              {this.state.userIsWin === 'Lose' ? "Faux !  " : ''}
                  Score : {this.state.goodGuess}</h2>
            <button className="rnd mui-btn mui-btn--raised btn btn-asanas" onClick={this.getRandomAsanas}>Random</button>
            <div className="img-container-guess">
              <img className="mui-panel" src={this.state.randomAsanas.flag} alt="Asanas Pictures" />
            </div>
            <fieldset disabled={this.state.disableFieldset}>
              <form onClick={e => this.checkWin(e)}>
                <button className="mui-btn mui-btn--raised btn btn-asanas" value={this.state.randomOptions[0]}>{this.state.randomOptions[0]}</button>
                <button className="mui-btn mui-btn--raised btn btn-asanas" value={this.state.randomOptions[1]}>{this.state.randomOptions[1]}</button>
                <button className="mui-btn mui-btn--raised btn btn-asanas" value={this.state.randomOptions[2]}>{this.state.randomOptions[2]}</button>
                <button className="mui-btn mui-btn--raised btn btn-asanas" value={this.state.randomOptions[3]}>{this.state.randomOptions[3]}</button>
              </form>
              {/*<Timer score={this.state.goodGuess}/>*/}
            </fieldset>
          </div>
          <div className="describe-views">
            <h3>Nom Sanskrit (संस्कृतम्):</h3>
            <p>{this.state.sanskritName}</p>
            <br />
            <h3>Niveau (कठिनता):</h3>
            <p>{this.state.difficulte}</p>
            <br />
            <h3>Bénéfices (परिणाम):</h3>
            <p>{this.state.benefices}</p>
            <img src={require('./ressources/logo-amano-hilot.png')} alt="" />
          </div>
        </div>
      </div>
    )
  }
}


// export default connect((state) => ({state: state}))(AsanasGuess);

export default AsanasGuess;
