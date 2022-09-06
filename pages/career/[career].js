import axios from "axios";
import ApplyJob from "../../Components/Career/ApplyJob";
const SingleJob = ({ data }) => {
  console.log("here datas", data);
  const { title, description,id } = data;
  return (
    <div className="m-5">
      <h2 className="m-5">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {/* job apply form */}
      <div>
        <ApplyJob id={id} />
      </div>
    </div>
  );
};

export default SingleJob;

export async function getServerSideProps(context) {
  const { career } = context?.params;

  const config = {
    headers: {
      Authorization:
        "Basic Y29uY2F2ZWl0QGdtYWlsLmNvbTp2Ynp0OVEtbVpUN0stRzhmVG1tLXBLZXpw",
    },
  };
  const res = await axios(
    `http://rondhan-admin.vmsl.com.bd/sximoapi/${career}?module=vacancyannouncement`,
    config
  );
  return {
    props: {
      data: res?.data,
    },
  };
}