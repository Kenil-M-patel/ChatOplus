import LoginAndSignup from "../page/LoginAndSignup";
import MessageSection from '../page/MessageSection'
export const roots = [
    {
      path: "/",
      element: <MessageSection />,
    },
]
export const Protected = [
    {
        path: "/Login",
        element: <LoginAndSignup />,
      },
  ];
  