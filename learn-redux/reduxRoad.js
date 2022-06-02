
// ------CODECADEMY - REDUX ROAD------
//
// ADVENTURE GAME - reduxRoad.js
// TRAVEL AS FAR AS POSSIBLE AND DO NOT RUN OUT OF SUPPLIES!
//
// THREE ACTIONS
// 1. Gather - Gather supplies:
//      - You will gather 15 supplies but you will use up one day.
//
// 2. Travel - Travel x days:
//      - This will cost you 20 supplies per day.
//      - You can select how many days you will use up on this.
//
// 3. Tipped Wagon - Use this if the wagon is tipped:
//      - This will cost you 30 supplies and you will use up one day.
//
//
// NEXT UP
// - Add a cash property, beginning with 200 for the initial state
// - Add a 'sell' case: Players can give away 20 supplies to gain 5 cash
// - Add a 'buy' case: Players can gain 25 supplies at the cost of 15 cash
// - Add a 'theft' case: Outlaws steal half of the player’s cash


const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
}

const wagonReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'gather': {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1
      };
    }
    case 'travel': {
        const newSupplies = state.supplies - (20 * action.payload);
        if (newSupplies < 0) {
            console.log('You do not have enough supplies to travel ' + action.payload + ' days!')
            return state;
        } else {
            return { 
                supplies: newSupplies,
                distance: state.distance + (10 * action.payload),
                days: state.days + action.payload
            }
        }
    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      }
    }
  }
}






//------TESTING------
//
// INITIALIZE
let wagon = wagonReducer(undefined, {});
console.log(wagon);

// FIRST DAY
wagon = wagonReducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

// SECOND DAY
wagon = wagonReducer(wagon, {type: 'gather'});
console.log(wagon);

// THIRD DAY
wagon = wagonReducer(wagon, {type: 'tippedWagon'});
console.log(wagon);

// THREE DAYS OF TRAVEL
wagon = wagonReducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);


// TEST TO SEE IF USER CAN GET NEGATIVE SUPPLIES
wagon = wagonReducer(wagon, {type: 'travel', payload: 4});
console.log(wagon);