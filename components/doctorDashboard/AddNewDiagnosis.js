import PatientProfileSidebar from "../patientDashboard/PatientProfileSidebar";
import Footer from "../landingPage/Footer";

const AddNewDiagnosis = () => {
    return ( 
        <body className="font-poppins">
            <div className=" lg:min-h-screen lg:flex  ">
                
                <PatientProfileSidebar></PatientProfileSidebar>

                
                <div className=" ">
                    <h1 className="font-bold lg:text-2xl my-6 ml-6  ">Add a new diagnosis</h1>

                    <form className="bg-white shadow p-6 m-2 ml-6 mt-8 lg:font-bold   ">
                        <div className="lg:grid lg:grid-cols-8 flex  ">
                            <h1 className="">Date</h1>
                            
                            <input placeholder="date " required className=" bg-blue-100  rounded mx-2 px-2 py-1.5 outline-none col-span-2 "></input>
                        </div>
                        <div className="lg:flex mt-2">
                            <h1>Patient Name </h1>
                            
                            <input placeholder="first " required className="bg-blue-100 ml-8 rounded mx-2 px-2 py-1.5 outline-none "></input>
                            <input placeholder="middle " required className="bg-blue-100 rounded mx-2 px-2 py-1 outline-none "></input>
                            <input placeholder="last " required className="bg-blue-100 rounded mx-2 px-2 py-1 outline-none "></input>
                        </div>
                        <div className="flex mt-2 ">
                            <h1 className="">Doctor Name </h1>
                            
                            <input placeholder="first " required className="bg-blue-100 ml-9 rounded mx-2 px-2 py-1.5 outline-none "></input>
                            <input placeholder="middle " required className="bg-blue-100 rounded mx-2 px-2 py-1 outline-none "></input>
                            <input placeholder="last " required className="bg-blue-100 rounded mx-2 px-2 py-1 outline-none "></input>
                        </div>
                        <div className="grid grid-cols-8 mt-2  ">
                            <h1 className="">Hospital Name </h1>
                            
                            <input placeholder="Hospital name " required className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-5"></input>
                        </div>
                        <div className="grid grid-cols-8 mt-2 ">
                            <h1 className="">Hospital Address </h1>
                            
                            <input placeholder="Address  " className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-6"></input>
                        </div>
                        <div className="grid grid-cols-2 mt-2">
                            <div className="flex">
                                <h1 className="">Chief complaints </h1>
                            
                                <input placeholder="e.g acidity " className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-5"></input>

                            </div>
                            <div className="flex">
                                <h1 className="">Clinical findings </h1>
                            
                                <input placeholder="Hospital name " className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-5"></input>    

                            </div>
                            
                        </div>
                        <div className="grid grid-cols-8 mt-2  ">
                            <h1 className="">Notes </h1>
                            
                            <input placeholder="Hospital name " className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-4"></input>
                        </div>
                        <div className="grid grid-cols-8 mt-2  ">
                            <h1 className="">Diagnosis</h1>
                            
                            <input placeholder="e.g. fever " required className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-3"></input>
                        </div>
                        <div className="grid grid-cols-8 mt-2  ">
                            <h1 className="col-span-2 ">Procedure Conducted</h1>
                            
                            <input placeholder="e.g CT Scan " className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-3"></input>
                        </div>
                        <h1 className="font-bold text-xl mt-4 ">Medicines</h1>

                        <div className="mt-4">
                            <div className="grid grid-cols-8 mt-2  ">
                                <h1 className="">Medicine Name </h1>
                            
                                <input placeholder="e.g crosin " required className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-2"></input>
                            </div>
                            <div className="grid grid-cols-7">
                                <div className="col-span-3">
                                    
                                    <div className="flex mt-2  ">
                                        <h1 className="">Type</h1>
                            
                                        <input placeholder="type " className=" bg-blue-100 ml-8 rounded mx-2 px-2 py-1.5 outline-none "></input>
                                    </div>
                                    <div className="flex mt-2  ">
                                        <h1 className="">Duration (days)</h1>
                            
                                        <input placeholder="e.g 3 " required className=" bg-blue-100 rounded ml-8 mx-2 px-2 py-1.5 outline-none col-span-2"></input>
                                    </div>
                                    <div className="flex mt-2  ">
                                        <h1 className="">Total Tablets</h1>
                            
                                        <input placeholder="type " required className=" bg-blue-100 rounded ml-14 mx-2 px-2 py-1.5 outline-none col-span-2" type='number'></input>
                                    </div>
                                    

                                </div>
                                <div className="col-span-3">
                                    <h1>Dosages</h1>
                                    <div className="flex mt-2  ">
                                        <h1 className="">Morning</h1>
                            
                                        <input placeholder="e.g 1 " required className=" bg-blue-100 ml-6 rounded mx-2 px-2 py-1.5 outline-none col-span-2"></input>
                                        <select className="" id="morning">
                                            <option>Before Food</option>
                                            <option>After food</option>
                                        </select>
                                    </div>
                                    <div className="flex mt-2  ">
                                        <h1 className="">Afternoon</h1>
                            
                                        <input placeholder=" " required className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-2"></input>
                                        <select className="" id="afternoon">
                                            <option>Before Food</option>
                                            <option>After food</option>
                                        </select>
                                    
                                    </div>
                                    <div className="flex mt-2  ">
                                        <h1 className="">Night</h1>
                            
                                        <input placeholder=" " required className=" bg-blue-100 ml-12 rounded mx-2 px-2 py-1.5 outline-none col-span-2"></input>
                                        <select className="" id="night">
                                            <option>Before Food</option>
                                            <option>After food</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div>
                                    <h1>jayesh</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-8 mt-2  ">
                                <h1 className="">Insvestigations </h1>
                            
                                <input placeholder=" e.g X-Ray" className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-3"></input>
                            </div>
                            <div className="grid grid-cols-8 mt-2  ">
                                <h1 className="">Advices    </h1>
                            
                                <input placeholder="e.g dont eat much salty " required className=" bg-blue-100 rounded mx-2 px-2 py-1.5 outline-none col-span-3"></input>
                            </div>

                        </div>

                        <div className=" mx-auto mt-4  py-1 flex justify-center  rounded font-semibold font-poppins   ">
                           
                            <button className=" font-bold   bg-primary px-4 py-2 rounded shadow-sm hover:bg-bgsecondary">Submit</button>
                        </div>

                    </form>
                    
                </div>
                
            </div>
            <Footer></Footer>
        </body>
     );
}
 
export default AddNewDiagnosis;