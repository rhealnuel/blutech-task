import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';


const Table = (props) => {
  const [rawData, setRawData] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const[error, setError] = useState()
  const [loading, setLoading] = useState()
  const [open, setOpen] = useState(null)


  const data = rawData.filter((item )=> 
    item.Name.toLowerCase().includes(props.searchTerm)
  )

  const handleRowClick = (index) => {
    if(open === index){
      setOpen("")
    }else{

      setOpen(index)
    }

  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50&search=search'
        );
        console.log(response.data);
        setRawData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className='text-xl my-6 mx-5 font-bold'>Department List</h1>
      <table className='mb-5 w-full rounded-xl'>
        <tr className="w-full bg-[#F0F4FE] text-center text-gray-600 uppercase text-xs leading-normal mb-10 rounded-xl">
          <th className="py-3 items-center">
            <input type='checkbox' className='mr-5' />S/N
          </th>
          <th className="py-3 px-2">Image</th>
          <th className="py-3 px-2">SKU</th>
          <th className="py-3 px-4">Name</th>
          <th className="py-3 px-6 pl-8">Title</th>
          <th className="py-3 px-6">Description</th>
          <th className="py-3 px-6">Brand</th>
          <th className="py-3">Cost Price</th>
          <th className="py-3 px-0">Quantity</th>
          <th className="py-3 px-3">Size</th>
        </tr>
      </table>
      <div className='bg-white rounded-xl p-2 h-[68vh] overflow-y-hidden hover:overflow-y-auto slim-scrollbar'>
        <table className="min-w-full bg-white text-xs leading-loose text-left cursor-pointer text-[#4d4d4d] font-bold">
          <tbody className="text-xs text-left ">
            {data.map((item, index) => (
              <tr
                key={index}
                className={`overflow-hidden transition-all duration-300 py-10 ${
                  expandedRows.includes(index)
                    ? 'max-h-none border-b border-gray-200 hover:bg-gray-100'
                    : 'max-h-8 pr-10 border-b border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => handleRowClick(index)}
              >
                <td className="py-7 px-3">
                  <input type='checkbox' className='mr-5' /> {index + 1}
                </td>
                <td className="px-4">
                  <img src={item.Image_1} alt="Product" className='w-10 h-10' />
                </td>
                <td className="px-4">{item.SKU}</td>
                <td className={`overflow-hidden  duration-300 ${
                  open === index
                    ? 'max-h-none px-3 pr-5 w-[155px]'
                    : 'max-h-12 px-2 pr-4 w-[155px]'
                }`}>
                  {item.Name}
                </td>
                <td className="w-[130px] pr-2">{item.Title}</td>
                <td className="max-w-[170px] px-6">
                <motion.p
                    initial={false}
                    animate={{ height: open === index ? 'auto' : '50px' }}
                    className="overflow-hidden"
                    transition={{ duration: 0.3 }}
                  >
                    {item.Description}
              </motion.p>
                </td>
                <td className="px-6">{item.Brand}</td>
                <td className="px-6">{item["Cost Price"]}</td>
                <td className="px-6">{item.Quantity}</td>
                <td className="px-2">{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
