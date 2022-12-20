import IRootState from "@/store/types";
import { Module } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { IAuthState, ITokenDetails } from "./types";

export const state: IAuthState = {
  tokenDetails: JSON.parse(
    localStorage.getItem("tokenDetails") ?? ""
  ) as ITokenDetails,
  registerErrors: undefined,
  loginErrors: undefined,
};

export const auth: Module<IAuthState, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
