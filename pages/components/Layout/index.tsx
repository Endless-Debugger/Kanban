import type { NextPage } from "next";
import { HtmlProps } from "next/dist/shared/lib/html-context";
import Apphead from "../Apphead";
import SecondarySideBar from "../SecondarySideBar";
import Sidebar from "../Sidebar";
import Main from "../Main";

function Layout({
  title,
  children,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Apphead title={title} />
      {children}
      <Sidebar />
      <SecondarySideBar />
      <Main />
      <div id="popupContainer"></div>
    </>
  );
}

export default Layout;
