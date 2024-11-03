// eslint-disable-next-line react/prop-types
const Alert = ({ type, text }) => {
    return (
      <div className="fixed top-6 right-6 z-50">
        <div className="flex w-full text-indigo-100 leading-none rounded-lg flex lg:inline-flex p-5">
          <div
            className={`flex items-center justify-center ${type === "danger" ? "bg-red-900" : "bg-green-900"} p-1.5 rounded-l-sm`}
            style={{ flex: '0 0 6px' }} 
          />
          <div className="border-l border-gray-300" style={{ width: "1px" }} />
          <div className="flex items-center justify-center bg-white p-4 rounded-r-sm" style={{ flex: '1' }}>
            <p className="text-black text-sm">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Alert;
  