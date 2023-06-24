import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* contoh menggunakan outlet untuk merender 2 komponent jika mengakses route home/shop */}
      <Directory />;
      <Outlet />
    </div>
  );
};

export default Home;
