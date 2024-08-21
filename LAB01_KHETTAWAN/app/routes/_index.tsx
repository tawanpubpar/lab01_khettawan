import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { toon } from "./data";

export const meta: MetaFunction = () => {
  return [
    { title: "Lab01_Thanasin" },
    { name: "Lab01_Sec1", content: "Welcome to Book toon" },
  ];
};

function CheckBestsell({ Bestsellers }) {
  return (
    <>
      {Bestsellers ? (
        <h1 className="text-red-500 font-bold text-xl mb-2">ขายดี!!</h1>
      ) : null}
    </>
  );
}

function CheckSuggestions({ Suggestions }) {
  return (
    <>
      {Suggestions ? (
        <h1 className="text-red-500 font-bold text-xl mb-2">แนะนำ!!</h1>
      ) : null}
    </>
  );
}

function Library({
  Code,
  Title,
  Cover,
  Description,
  Category,
  Author,
  Publishing,
  Price,
  Bestsellers,
  Suggestions,
  link // เปลี่ยนชื่อจาก Link เป็น link
}) {
  console.log('Rendering Library with link:', link); // Debugging line

  const borderStyle = {
    border: "solid 3px",
    borderColor: "green",
    margin: "30px 0px"
  };

  return (
    <div style={borderStyle} className="p-4">
      <div className="text-gray-900 font-bold text-xl mb-2">รหัส : {Code}</div>
      <h1 className="text-gray-900 font-bold text-xl mb-2">ชื่อหนังสือ : {Title}</h1>
      <img className="w-full h-60 object-cover" src={Cover} alt={Title} />
      <h1 className="text-gray-900 font-bold text-xl mb-2">คำอธิบาย :</h1>
      <p className="text-gray-700 text-base">{Description}</p>
      <h4 className="text-gray-900 font-bold text-xl mb-2">หมวด : {Category}</h4>
      <h4 className="text-gray-900 font-bold text-xl mb-2">ผู้แต่ง : {Author}</h4>
      <h4 className="text-gray-900 font-bold text-xl mb-2">จำหน่ายวันที่ : {Publishing}</h4>
      <h2 className="text-green-900 font-bold text-xl mb-2">ราคา : {Price} บาท</h2>
      <CheckBestsell Bestsellers={Bestsellers} />
      <CheckSuggestions Suggestions={Suggestions} />
      <Link to={link} className="border bg-green-500 px-2 py-1 hover:bg-green-600">
        ดูเพิ่มเติม
      </Link>
    </div>
  );
}

export default function Index() {
  console.log('Rendering Index component'); // Debugging line

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">อ่านมังงะอ่านการ์ตูนออนไลน์แปลไทย 2024</h1><br />
      
      <table className="min-w-full divide-y divide-gray-200 border-collapse border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Code</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Cover</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Author</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Publishing</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Action</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">acquaint</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {toon.map((toon) => (
            <tr key={toon.Code} className="border border-gray-300">
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{toon.Code}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{toon.Title}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                <img 
                  src={toon.Cover} 
                  alt={toon.Title} 
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300 max-w-xs overflow-hidden text-ellipsis">
                <p className="truncate">{toon.Description}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{toon.Category}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{toon.Author}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{toon.Publishing}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{toon.Price}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                <Link 
                  to={toon.href} 
                  className="border bg-green-500 px-2 py-1 hover:bg-green-600"
                >
                  ดูเพิ่มเติม
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                <CheckBestsell Bestsellers={toon.Bestsellers} />
                <CheckSuggestions Suggestions={toon.Suggestions} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
