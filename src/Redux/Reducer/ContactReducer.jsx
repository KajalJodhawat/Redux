const initialstate = {
  contacts: [
    {
      id: 1,
      Email: "rv@gmail.com",
      Number: "4325354354325"
    },
    {
      id: 2,
      Email: "v@gmail.com",
      Number: "2432543253425"
    }
  ]

}

export const ContactReducer = (state = initialstate, action) => {

  switch (action.type) {
    case "CREATE_CONTACT":
      {
        console.log("addReducer", action)
        console.log("state", state)
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };

      }
    case "DELETE_CONTACT":
      {
        console.log("deleteReducer", action)
        console.log("deletestate", state)
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id != action.payload
          ),
        };

      }
    case "GET_CONTACT":
      {
        console.log("getconatct", action.payload);
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );

        arr = arr.values();
        
        for (let val of arr) {
          arr = val;
        }
        console.log("getReducer", arr);
        return {
          ...state,
          contact: arr,
        };

      }

      case "UPDATE_CONTACT": {
        console.log(action.payload);
        console.log("mmm",state.contacts);
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
          ),
        };
      }
    default:
      return state;

  }
}