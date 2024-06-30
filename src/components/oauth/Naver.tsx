import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ILoginData {
  code: string;
  state: string;
}

const Naver = () => {
  const navigate = useNavigate();

  // url에서 code 추출
  const params = new URLSearchParams(window.location.search);
  const code: string | null = params.get("code");
  const state: string | null = params.get("state");

  useEffect(() => {
    const handleLoginPost = async (code: string, state: string) => {
      const data: ILoginData = {
        code,
        state
      };
      try {
        await axios.post("/", data);
        navigate("/home");
        // window.location.reload();
      } catch (e) {
        console.dir(e);
      }
    };

    if (code && state) {
      handleLoginPost(code, state);
    } else {
      console.log("로그인 실패함");
    }
  }, [code, state, navigate]);

  return <div>로그인 진행중...</div>;
};

export default Naver;
