import type { Action, Student } from "../../utils/types";

const initialState: Student[] = [
  {
    id: "SV001",
    name: "Loki",
    age: 22,
    gender: "Nam",
    birthday: "20-13-1900",
    hometown: "Hà Lội",
    address: "Sơn Tây, Hà Nội",
  },
  {
    id: "SV002",
    name: "KAME",
    age: 19,
    gender: "Nam",
    birthday: "22-1-2222",
    hometown: "Đà Nẵng",
    address: "Sơn Tây, Đà Nẵng",
  },
  {
    id: "SV003",
    name: "AQI",
    age: 21,
    gender: "Nam",
    birthday: "2-1-1688",
    hometown: "TP.Hồ Chí Minh",
    address: "Quận 1, TP.Hồ Chí Minh",
  },
];

export const reducerStudent = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return state;
    default:
      return state;
  }
};
