import { fetchUser } from "@/app/fetchApi/fetchComapyProfile";
import Header from "@/components/Main/Header";
import Sidebar from "@/components/Main/Sidebar";

export default async function Layout({ children }) {
  const company = await fetchUser();
  return (
    <div className="min-h-screen flex">
       <Sidebar /> 
    <div className=" w-full">
      <main>{children}</main>
    </div>
     </div>
  );
}
