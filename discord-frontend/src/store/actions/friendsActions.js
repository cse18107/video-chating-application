import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = {};
    await api.sendFriendInvitation(data).then((res) => {
      if (res.error) {
        dispatch(openAlertMessage(res.exception?.response?.data));
      } else {
        dispatch(openAlertMessage("Invitation has been sent!"));
        closeDialogHandler();
      }
    });
  };
};