import { GET_SCALES } from "./types";
import { api } from "../api/index";

export const setSearch = (search) => (dispatch) =>
  dispatch({ type: GET_SCALES, payload: search });

export const getScales = () => (dispatch) =>
  api
    .get(`rest/v2/all`)
    .then((res) => dispatch({ type: GET_SCALES, payload: res.data }));
