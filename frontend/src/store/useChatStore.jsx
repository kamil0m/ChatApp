import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";
import { useAuthStore } from "./useAuthStore.jsx";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
        const res = await axiosInstance.get("/messages/users");
        set({ users: res.data });
    } catch (error) {
        toast.error(error.response.data.message);
    } finally {
        set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessegesLoading: true });
    try {
        const res = await axiosInstance.get(`/messages/${userId}`);
        set({ messages: res.data });
    } catch (error) {
        toast.error(error.response.data.message);
    } finally {
        set({ isMessegesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  subscribeToMessages: () => {
    const { selectedUser } = get();
    if(!selectedUser) return;

    const socket = useAuthStore.getState().socket;

    // todo: opttimize this later
    socket.on("newMessage", (newMessage) => {
      set({
        messages: [...get().messages, newMessage]
      });
    });
  },

  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },


  // todo: opttimize this later
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}))