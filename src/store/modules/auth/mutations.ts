import { MutationTree } from "vuex";
import {
  IAuthState,
  ILoginErrors,
  IRegisterErrors,
  ITokenDetails,
} from "./types";

export const mutations: MutationTree<IAuthState> = {
  SET_TOKEN_DETAILS(state, payload: ITokenDetails) {
    state.tokenDetails = payload;
    localStorage.setItem("tokenDetails", JSON.stringify(payload));
  },

  SET_REGISTER_ERRORS(state, payload: IRegisterErrors) {
    state.registerErrors = payload;
  },

  SET_LOGIN_ERRORS(state, payload: ILoginErrors) {
    state.loginErrors = payload;
  },
};
