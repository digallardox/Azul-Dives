import { setCookie } from "./setCookie";

export const setSession = (res : any) => {
  const { token, diver } = res;
  setCookie("token", token);
  setCookie("diver", diver.id);
};
