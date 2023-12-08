import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div>
        <div className="h-screen w-screen flex justify-center items-center">
            <div className=""><SignUp></SignUp></div>
            
        </div>

    </div>
  );
}