import { Divider, Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";

const Seat = () => {
  const economyRows = 2;
  const economyCols = 12;
  const bussinessRows = 6;
  const bussinessCols = 10;
  const firstRows = 2;
  const firstCols = 10;

  //hạng của user
  const userClass = "economy";

  let userClassVIE;
  switch (userClass) {
    case "first":
      userClassVIE = "nhất";
      break;
    case "bussiness":
      userClassVIE = "thương gia";
      break;
    case "economy":
      userClassVIE = "phổ thông";
      break;
    default:
      break;
  }

  //ghế đã có người chọn
  const seatIsTakenFirst = ["A1", "B1", "A6", "D6"];
  const seatIsTakenBussiness = ["A1", "B1", "C1"];
  const seatIsTakeneconomy = ["A6", "B6", "D6"];

  const [userChoices, setUserChoices] = useState([]);

  //thay đổi khi ấn button chọn ghế
  const handleSeatChange = (rowIndex, colIndex) => {
    const seatID = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;

    if (
      (seatIsTakenFirst.includes(seatID) && userClass === "first") ||
      (seatIsTakenBussiness.includes(seatID) && userClass === "bussiness") ||
      (seatIsTakeneconomy.includes(seatID) && userClass === "economy")
    )
      return;

    if (userChoices.includes(seatID)) {
      setUserChoices(userChoices.filter((choice) => choice !== seatID));
    } else {
      setUserChoices([...userChoices, seatID]);
    }
  };

  //kiểm tra trạng thái ghế
  const isSeatSelected = (rowIndex, colIndex) => {
    const seatId = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
    return userChoices.includes(seatId);
  };

  //ấn tiếp tục
  const handleSubmit = () => {
    console.log(userClass + " class: " + userChoices);
  };

  return (
    <div className="m-auto mb-5 mt-5 p-5 place-items-center relative bg-indigo-50">
      <Typography variant="h3" textAlign={"center"} gutterBottom>
        Chọn chỗ ngồi
      </Typography>
      <div className="flex">
        {/* ghế hạng nhất */}
        <div className="flex flex-col justify-center ml-5 mr-5">
          <Typography variant="body1" align="center" gutterBottom>
            Hạng nhất
          </Typography>
          <div
            className="grid gap-x-1 items-center "
            style={{
              gridTemplateColumns: `25px repeat(${firstCols}, 25px)`,
            }}
          >
            {/* hiển thị id của các cột */}
            <div></div>
            {Array.from({ length: firstCols }).map((_, colIndex) => (
              <div className="text-center font-bold">{colIndex + 1}</div>
            ))}
            {/* Hiển thị các hàng và button */}
            {Array.from({ length: firstRows }).map((_, rowIndex) => (
              <>
                <div className="text-center font-bold">
                  {String.fromCharCode(65 + rowIndex)}
                </div>
                {Array.from({ length: firstCols }).map((_, colIndex) => (
                  <Button
                    key={`seat-${rowIndex}-${colIndex}`}
                    variant={
                      seatIsTakenFirst.includes(
                        `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
                      )
                        ? "contained"
                        : isSeatSelected(rowIndex, colIndex) &&
                          userClass === "first"
                        ? "contained"
                        : "outlined"
                    }
                    color={
                      seatIsTakenFirst.includes(
                        `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
                      )
                        ? "inherit"
                        : isSeatSelected(rowIndex, colIndex) &&
                          userClass === "first"
                        ? "primary"
                        : "default"
                    }
                    sx={{
                      width: "25px",
                      height: "25px",
                      margin: "2px",
                      minWidth: "20px",
                      padding: 0,
                      borderRadius: "50%",
                      fontSize: "0.7rem",
                    }}
                    onClick={() => {
                      if (
                        !seatIsTakenFirst.includes(
                          `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
                        )
                      ) {
                        if (userClass === "first")
                          handleSeatChange(rowIndex, colIndex);
                      }
                    }}
                  >
                    {/* Chỉ hiển thị ID ghế */}
                    {String.fromCharCode(65 + rowIndex)}
                    {colIndex + 1}
                  </Button>
                ))}
              </>
            ))}
          </div>
        </div>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className="bg-black"
        />

        {/* ghế thương gia */}
        <div className="flex flex-col justify-center ml-5 mr-5">
          <Typography variant="body1" align="center" gutterBottom>
            Hạng thương gia
          </Typography>
          <div
            className="grid gap-x-1 items-center "
            style={{
              gridTemplateColumns: `25px repeat(${bussinessCols}, 25px)`,
            }}
          >
            {/* hiển thị id cột */}
            <div></div>
            {Array.from({ length: bussinessCols }).map((_, colIndex) => (
              <div className="text-center font-bold">{colIndex + 1}</div>
            ))}
            {/* Hiển thị các hàng và button */}
            {Array.from({ length: bussinessRows }).map((_, rowIndex) => (
              <>
                <div className="text-center font-bold">
                  {String.fromCharCode(65 + rowIndex)}
                </div>
                {Array.from({ length: bussinessCols }).map((_, colIndex) => (
                  <Button
                    key={`seat-${rowIndex}-${colIndex}`}
                    variant={
                      seatIsTakenBussiness.includes(
                        `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
                      )
                        ? "contained"
                        : isSeatSelected(rowIndex, colIndex) &&
                          userClass === "bussiness"
                        ? "contained"
                        : "outlined"
                    }
                    color={
                      seatIsTakenBussiness.includes(
                        `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
                      )
                        ? "inherit"
                        : isSeatSelected(rowIndex, colIndex) &&
                          userClass === "bussiness"
                        ? "primary"
                        : "default"
                    }
                    sx={{
                      width: "25px",
                      height: "25px",
                      margin: "2px",
                      minWidth: "20px",
                      padding: 0,
                      borderRadius: "50%",
                      fontSize: "0.7rem",
                    }}
                    onClick={() => {
                      if (userClass === "bussiness")
                        handleSeatChange(rowIndex, colIndex);
                    }}
                  >
                    {/* Chỉ hiển thị ID ghế */}
                    {String.fromCharCode(65 + rowIndex)}
                    {colIndex + 1}
                  </Button>
                ))}
              </>
            ))}
          </div>
        </div>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className="bg-black"
        />

        {/* ghế phổ thông */}
        <div className="flex flex-col justify-center ml-5 mr-5">
          <Typography variant="body1" align="center" gutterBottom>
            Hạng phổ thông
          </Typography>
          <div
            className="grid gap-x-1 items-center"
            style={{
              gridTemplateColumns: `25px repeat(${economyRows}, 25px)`,
            }}
          >
            {/* hiển thị id cột */}
            <div></div>
            {Array.from({ length: economyRows }).map((_, colIndex) => (
              <div className="text-center font-bold">{colIndex + 1}</div>
            ))}
            {/* Hiển thị các hàng và button */}
            {Array.from({ length: economyCols }).map((_, rowIndex) => (
              <>
                <div className="text-center font-bold">
                  {String.fromCharCode(65 + rowIndex)}
                </div>
                {Array.from({ length: economyRows }).map((_, colIndex) => (
                  <Button
                    className=""
                    key={`seat-${rowIndex}-${colIndex}`}
                    variant={
                      seatIsTakeneconomy.includes(
                        `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
                      )
                        ? "contained"
                        : isSeatSelected(rowIndex, colIndex) &&
                          userClass === "economy"
                        ? "contained"
                        : "outlined"
                    }
                    color={
                      seatIsTakeneconomy.includes(
                        `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
                      )
                        ? "inherit"
                        : isSeatSelected(rowIndex, colIndex) &&
                          userClass === "economy"
                        ? "primary"
                        : "default"
                    }
                    sx={{
                      width: "25px",
                      height: "25px",
                      margin: "2px",
                      minWidth: "20px",
                      padding: 0,
                      borderRadius: "50%",
                      fontSize: "0.7rem",
                    }}
                    onClick={() => {
                      if (userClass === "economy")
                        handleSeatChange(rowIndex, colIndex);
                    }}
                  >
                    {/* Chỉ hiển thị ID ghế */}
                    {String.fromCharCode(65 + rowIndex)}
                    {colIndex + 1}
                  </Button>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="m-5 flex">
        <strong>Ghế đã chọn (hạng {userClassVIE}): </strong>
        <p>{userChoices.length === 0 ? "Chưa chọn" : userChoices.join(", ")}</p>
      </div>

      <Button
        sx={{
          background: "linear-gradient(to right, #B993D6, #8CA6DB)",
        }}
        className="mt-5"
        variant="contained"
        onClick={handleSubmit}
      >
        Tiếp tục
      </Button>
      <div className="absolute bottom-3 right-3 flex flex-col gap-1">
        <div>
          <Button
            className=""
            variant={"contained"}
            color={"primary"}
            sx={{
              width: "25px",
              height: "25px",
              margin: "2px",
              minWidth: "20px",
              padding: 0,
              borderRadius: "50%",
              fontSize: "0.7rem",
            }}
          >
            A
          </Button>
          <label> Ghế bạn chọn</label>
        </div>

        <div>
          <Button
            className=""
            variant={"contained"}
            color={"inherit"}
            sx={{
              width: "25px",
              height: "25px",
              margin: "2px",
              minWidth: "20px",
              padding: 0,
              borderRadius: "50%",
              fontSize: "0.7rem",
            }}
          >
            B
          </Button>
          <label> Đã có người chọn</label>
        </div>

        <div>
          <Button
            className=""
            variant={"outlined"}
            color={"default"}
            sx={{
              width: "25px",
              height: "25px",
              margin: "2px",
              minWidth: "20px",
              padding: 0,
              borderRadius: "50%",
              fontSize: "0.7rem",
            }}
          >
            C
          </Button>
          <label> Chưa chọn</label>
        </div>
      </div>
    </div>
  );
};

export default Seat;
