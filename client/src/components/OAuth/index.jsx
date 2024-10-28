import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../firebase";
import { googleSignUp } from "@/services";

export default function OAuth({ handleSubmit }) {
  const auth = getAuth(app);
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await googleSignUp("/auth/google", resultsFromGoogle);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      className="w-full mt-2"
      type="submit"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleSubmit}
    >
      <FcGoogle className="w-5 h-5 mr-2" /> Google
    </Button>
  );
}
