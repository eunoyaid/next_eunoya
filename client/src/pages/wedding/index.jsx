import Tabbar from "../components/website_wedding/tabbar";
import CountdownMonths from "../components/countDown";
import FormDoa from "../components/formDoa";
import FormGift from "../components/formGift";
import Map from "../components/website_wedding/map";
import ListDoa from "../components/website_wedding/listDoa";
import Galleries from "../components/website_wedding/galleries";

const Wedding = () => {
  return (
    <div>
      <Tabbar />
      <FormGift />
      <FormDoa />
      <ListDoa />
      <Galleries />
      <CountdownMonths />
      <Map />
    </div>
  );
};

export default Wedding;
