import { useState } from "react";
import { useEffect } from "react";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const FecthDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
    };
    FecthDataFromAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();
    console.log(data.meals);
    setMealData(data.meals);
  };
  submitHandler();

  return (
    <>
      <div>
        <h1
          style={{
            color: "#ab7b0a",
            textAlign: "center",
            marginTop: "25px",
            fontWeight: "bolder",
            fontSize: "3rem",
          }}
        >
          HABAL FAMILY DINING
        </h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          type="button"
          className="btn btn-outline-primary mx-3"
          onClick={() => setArea("Indian")}
        >
          Indian
        </button>
        <button
          type="button"
          className="btn btn-outline-warning mx-3"
          onClick={() => setArea("Canadian")}
        >
          Canadian
        </button>
        <button
          type="button"
          className="btn btn-outline-success mx-3"
          onClick={() => setArea("American")}
        >
          American
        </button>
        <button
          type="button"
          className="btn btn-outline-danger mx-3"
          onClick={() => setArea("Thai")}
        >
          Thai
        </button>
        <button
          type="button"
          className="btn btn-outline-warning mx-3"
          onClick={() => setArea("British")}
        >
          British
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-3"
          onClick={() => setArea("Russian")}
        >
          Russian
        </button>
      </div>
      <form
        style={{ textAlign: "center", marginTop: "25px" }}
        onSubmit={submitHandler}
      >
        <input
          type="text"
          style={{
            width: "50%",
            fontSize: "1.5rem",
            borderRadius: "30px",
            backgroundColor: "#473563",
            textAlign: "center",
            color: "white",
          }}
          onChange={(e) => setInputData(e.target.value)}
        />
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {mealData.map((data) => (
          <div
            key={data.idMeal}
            style={{
              margin: "30px",
              textAlign: "center",
              maxWidth: "220px",
              maxHeight: "220px",
            }}
          >
            <div>
              <img
                src={data.strMealThumb}
                alt=""
                style={{
                  width: "220px",
                  border: "4px solid red",
                  borderRadius: "20px",
                }}
              />
            </div>
            <h4 style={{ marginTop: "10px", fontSize: "18px" }}>
              {data.strMeal}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
