import IRootState from "@/store/types";
import { GetterTree } from "vuex";
import {
  IAuthState,
  ILoginErrors,
  IRegisterErrors,
  ITokenDetails,
} from "./types";

export const getters: GetterTree<IAuthState, IRootState> = {
  GET_TOKEN_DETAILS(state): ITokenDetails {
    return state.tokenDetails;
  },

  GET_REGISTER_ERRORS(state): IRegisterErrors {
    return state.registerErrors ?? {};
  },

  GET_LOGIN_ERRORS(state): ILoginErrors {
    return state.loginErrors ?? {};
  },
};
