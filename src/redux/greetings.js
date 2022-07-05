import getGreetings from './greetingsapi';

const LOAD_GREETINGS = 'LOAD_GREETINGS';

export const fetchGreetings = () => async (dispatch) => {
  const response = await getGreetings();
  const data = await response.json();
  if (response.ok) {
    dispatch({
      type: LOAD_GREETINGS,
      payload: data,
    });
  }
};

// export const displayMission = () => async (dispatch) => {
//   const missionsArr = await getMissions();
//   const missionsTemp = [];

//   Object.keys(missionsArr).forEach((id) => {
//     missionsTemp.push({
//       mission_id: missionsArr[id].mission_id,
//       mission_name: missionsArr[id].mission_name,
//       description: missionsArr[id].description,
//       reserved: false,
//     });
//   });
//   dispatch(load(missionsTemp));
// };

const GreetingsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_GREETINGS:
      return action.payload;

    default:
      return state;
  }
};

export default GreetingsReducer;
