import React, { useEffect, useState } from "react";
import { Container, Button, Grid } from "@material-ui/core";

const vote_url = "http://localhost:8000/vote";
const StocksContext = React.createContext({
  stocks: [],
  fetchStocks: () => {},
});

export default function Stocks() {
  const [stocks, setStocks] = useState([]);
  const fetchStocks = async () => {
    const response = await fetch("http://localhost:8000/stocks");
    const stocks = await response.json();
    setStocks(stocks.data);
  };
  useEffect(() => {
    fetchStocks();
  }, []);
  function createVote(votetype, stock, e) {
    e.preventDefault();
    if (!localStorage.user) {
      return "Login!";
    }
    const data = JSON.stringify({
      symbol: stock.symbol,
      votetype: votetype,
    });

    fetch(vote_url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.user,
      },
      body: data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <StocksContext.Provider value={{ stocks, fetchStocks }}>
      <Container>
        <Grid container direction="row">
          <div>
            {stocks.map((stock) => (
              <Grid item>
                <p>
                  { stock.name }     { stock.symbol }          { stock.price }
                  <Button onClick={(e) => createVote(true, stock, e)}>
                    Yes
                  </Button>
                  /{" "}
                  <Button onClick={(e) => createVote(false, stock, e)}>
                    No
                  </Button>
                </p>
              </Grid>
            ))}
          </div>
        </Grid>
      </Container>
    </StocksContext.Provider>
  );
}
