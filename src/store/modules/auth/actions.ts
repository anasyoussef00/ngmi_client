import Api from "@/api";
import { IRegisterFormData } from "@/api/interfaces/auth/IRegisterFormData";
import { ILoginFormData } from "@/api/interfaces/auth/ILoginFormData";
import IRootState from "@/store/types";
import { ActionTree } from "vuex";
import { IAuthState } from "./types";
import IRegisterRes from "@/api/interfaces/res/auth/IRegisterRes";
import ILoginRes from "@/api/interfaces/res/auth/ILoginRes";
import axios from "axios";

export const actions: ActionTree<IAuthState, IRootState> = {
  async REGISTER({ commit }, payload: IRegisterFormData) {
    try {
      const { data } = await Api<IRegisterRes>({
        method: "post",
        url: "/auth/register",
        data: payload,
      });
      commit("SET_REGISTER_ERRORS", undefined);
      commit("SET_TOKEN_DETAILS", data.tokenDetails);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          commit("SET_REGISTER_ERRORS", err.response.data.errors);
        }
      }
    }
  },

  async LOGIN({ commit }, payload: ILoginFormData) {
    try {
      await Api.get("/sanctum/csrf-cookie");
      const { data } = await Api<ILoginRes>({
        method: "post",
        url: "/auth/login",
        data: payload,
      });
      commit("SET_LOGIN_ERRORS", undefined);
      commit("SET_TOKEN_DETAILS", data.tokenDetails);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          commit("SET_LOGIN_ERRORS", err.response.data.errors);
        }
      }
    }
  },
};
