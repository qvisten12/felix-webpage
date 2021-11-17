import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import WorkList from "../components/WorkList/index";

export default function Home() {
  return (
    <div className="">
      <Header />
      <hr />
      {/* <Projects /> */}
      <WorkList />
    </div>
  );
}
