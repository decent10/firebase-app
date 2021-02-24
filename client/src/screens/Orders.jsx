import moment from "moment";
import { useQuery } from "react-query";
import { Link, useHistory } from "react-router-dom";
import request from "../core/graphqlRequest";
import GETORDERS from "../graphql/orders";

const formateDate = (date) => {
  if (date === "" || date === null) return;
  let dateObj = new Date(+date * 1000);
  console.log(date);
  if (!moment(dateObj).isValid()) return null;

  return moment(dateObj).format("DD-MM-YYYY");
};

export default () => {
  let history = useHistory();
  const { data, status, error } = useQuery("orders", async () => {
    let res = await request(GETORDERS);
    return res;
  });
  const navigateToDetailScreen = (id) => history.push(`{orders/${id}}`);
  if (status === "loading") {
    return (
      <div className="w-full h-full fixed block mt-8 bg-white opacity-75 z-50">
        <span
          className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
          style={{ top: "50%" }}
        >
          <i className="fas fa-circle-notch fa-spin fa-5x" />
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table
              width="100%"
              padding="0"
              cellSpacing="0"
              className="table-fixed divide-y divide-gray-200"
            >
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase overflow-clip overflow-hidden trancate w-48 "
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className=" w-48 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                  >
                    Booking Date
                  </th>
                  <th
                    scope="col"
                    className=" w-48 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className=" w-48 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                  >
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="w-48 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.orders.map((order, index) => (
                  <tr key={index}>
                    <td className="w-48 px-6 py-4 overflow-ellipsis  truncate w-2/6 text-sm font-medium text-gray-900">
                      {order.title}
                    </td>
                    <td className=" w-48 px-6 py-4 overflow-ellipsis truncate truncate w-2/6 text-sm text-gray-900">
                      {formateDate(order.bookingDate)}
                    </td>
                    <td className=" w-48 px-6 py-4  overflow-ellipsis truncate">
                      {order.address?.city} {order.address?.stree}{" "}
                      {order.address?.zip}
                    </td>
                    <td className="px-6 py-4  text-sm text-gray-500 truncate">
                      {order.customer?.name}
                    </td>
                    <td className=" w-48 px-6 py-4  text-right text-sm font-medium">
                      <Link
                        to={`/orders/${order.uid}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}

                {/* More items... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
