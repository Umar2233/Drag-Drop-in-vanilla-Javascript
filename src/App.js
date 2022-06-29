import React from "react";
import './app.css'
import Board from "./components/Board";
import Card from "./components/Card";

function App() {

  return (
    <div className="App" >
      <main className="flexbox" >
        <h1>
          Bounties
        </h1>
        <div className="cardContainer" >
          <div className="heading heading1" >
            OPEN BOUNTIES
          </div>
          <div className="heading heading2" >
          ASSIGNED/IN PROGRESS
          </div>
          <div className="heading heading3" >
            UNDER REVIEW
          </div>
          <div className="heading heading4" >
            CLOSE/ REWARDED
          </div>
        </div>
        <div className="cardWrapper" >
          <Board id='board-1' className='board' >
            <Card id='card_1' className='card1 card' dragable='true' >
              <div className="cardTitle" >
                <h1>Write A Blogpost For DAOHelper</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="reward" >
                <h5>Reward: $5</h5>
                <h5>Time Left: 2days</h5>
              </div>
            </Card>
            <Card id='card_12' className='card1 card' dragable='true' >
              <div className="cardTitle" >
                <h1>Write A Blogpost For DAOHelper</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="reward" >
                <h5>Reward: $5</h5>
                <h5>Time Left: 2days</h5>
              </div>
            </Card>
          </Board>

          <Board id='board-2' className='board' >
            <Card id='card_2' className='card2 card' dragable='true' >
              <div className="cardTitle" >
                <h1>Write A Blogpost For DAOHelper</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="reward" >
                <h5>Reward: $5</h5>
                <h5>Time Left: 2days</h5>
              </div>
            </Card>
            <Card id='card_21' className='card2 card' dragable='true' >
              <div className="cardTitle" >
                <h1>Write A Blogpost For DAOHelper</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="reward" >
                <h5>Reward: $5</h5>
                <h5>Time Left: 2days</h5>
              </div>
            </Card>
          </Board>

          <Board id='board-3' className='board' >
            <Card id='card_3' className='card3 card' dragable='true' >
              <div className="cardTitle" >
                <h1>Write A Blogpost For DAOHelper</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="reward" >
                <h5>Reward: $5</h5>
                <h5>Time Left: 2days</h5>
              </div>
            </Card>
          </Board>

          <Board id='board-4' className='board' >
            <Card id='card_4' className='card4 card' dragable='true' >
              <div className="cardTitle" >
                <h1>Write A Blogpost For DAOHelper</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="reward" >
                <h5>Reward: $5</h5>
                <h5>Time Left: 2days</h5>
              </div>
            </Card>
            <Card id='card_41' className='card4 card' dragable='true' >
              <div className="cardTitle" >
                <h1>Write A Blogpost For DAOHelper</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="reward" >
                <h5>Reward: $5</h5>
                <h5>Time Left: 2days</h5>
              </div>
            </Card>
          </Board>
        </div>
      </main>
    </div>
  );
}

export default App;
