import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const response = [
    { itemName: "Nirma", ItemDate: "20", itemMonth: "June", itemYear: "1998" },

    {
      itemName: "Nirma2",
      ItemDate: "20",
      itemMonth: "June2",
      itemYear: "1998",
    },

    {
      itemName: "Nirma3",
      ItemDate: "20",
      itemMonth: "June3",
      itemYear: "1998",
    },
  ];
  return (
    <div>
      <Item name={response[0].itemName}>Hello jee mai hu john the don</Item>
      <ItemDate
        day={response[0].ItemDate}
        month={response[0].itemMonth}
        year={response[0].itemYear}
      ></ItemDate>
      <Item name={response[1].itemName}></Item>
      <ItemDate
        day={response[1].ItemDate}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      ></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate
        day={response[1].ItemDate}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      ></ItemDate>
      <div className="App">Hello Jee</div>
    </div>
  );
}

export default App;
